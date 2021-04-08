import { last } from 'lodash';
import React, { useCallback, useState } from 'react';
import ReactFlow, { addEdge, removeElements } from 'react-flow-renderer';

// Containers
import Action from './Action';
import Condition from './Condition';
import Content from './Content';
import Randomize from './Randomize';
import Start from './Start';

// Store
import { useNotifications } from '@store';

const nodeTypes = {
  action: Action,
  condition: Condition,
  content: Content,
  randomize: Randomize,
  start: Start
};

const Flow = () => {
  // Setup
  const { createNotification } = useNotifications();

  // State
  const [elements, setElements] = useState([
    {
      id: '1',
      type: 'start',
      position: { x: 100, y: 400 }
    },
    {
      id: '2',
      position: { x: 550, y: 250 },
      type: 'randomize'
    },
    {
      id: 'e1-2',
      source: '1',
      sourceHandle: null,
      target: '2',
      style: {
        strokeWidth: 2
      }
    },
    {
      id: '3',
      position: { x: 550, y: 600 },
      type: 'condition'
    },
    {
      id: '4',
      position: { x: 1000, y: 350 },
      type: 'content'
    },
    {
      id: '5',
      position: { x: 1000, y: 550 },
      type: 'action'
    }
  ]);

  // @todo - for tests
  // Handlers
  const onConnect = useCallback(
    (params) => {
      if (params.source === params.target) {
        createNotification({
          description: 'Block cannot reference itself.',
          timeout: 5000,
          title: 'Link creation error!',
          variant: 'danger'
        });

        return;
      }

      const oldLinks = elements.filter(
        ({ source, sourceHandle }: any) =>
          source === params.source && sourceHandle === params.sourceHandle
      );
      const filteredElements = removeElements(oldLinks, elements);

      let hasCycling = false;

      if (params.source) {
        const graphs: string[][] = [];
        const edges = elements.filter(({ source }) => !!source);

        edges.forEach(({ source, target }) => {
          let hasGraph = false;

          graphs.forEach((graph) => {
            if (last(graph) === source) {
              hasGraph = true;
              graph.push(target as string);
            }
          });

          if (!hasGraph) {
            graphs.push([source as string, target as string]);
          }
        });

        graphs.forEach((graph) => {
          if (!hasCycling) {
            hasCycling =
              graph.indexOf(params.target as string) > -1 &&
              graph.indexOf(params.source as string) > -1;
          }
        });
      }

      if (hasCycling) {
        createNotification({
          description: 'Chain of links creates looping.',
          timeout: 5000,
          title: 'Link creation error!',
          variant: 'danger'
        });

        return;
      }

      return setElements(
        addEdge(
          { ...params, style: { strokeWidth: 2 } },
          filteredElements
        ) as any
      );
    },
    [createNotification, elements]
  );

  return (
    <ReactFlow
      elements={elements}
      nodeTypes={nodeTypes}
      onConnect={onConnect}
      snapToGrid
    />
  );
};

export default Flow;
