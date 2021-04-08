import React, { useCallback, useState } from 'react';
import ReactFlow, { addEdge, removeElements } from 'react-flow-renderer';

// Containers
import Action from './Action';
import Condition from './Condition';
import Content from './Content';
import Randomize from './Randomize';
import Start from './Start';

const nodeTypes = {
  action: Action,
  condition: Condition,
  content: Content,
  randomize: Randomize,
  start: Start
};

const Flow = () => {
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
  const onConnect = useCallback((params) => {
    setElements((elements) => {
      const oldLinks = elements.filter(
        ({ source, sourceHandle }: any) =>
          source === params.source && sourceHandle === params.sourceHandle
      );
      const filteredElements = removeElements(oldLinks, elements);
      console.log(elements, params);
      return addEdge(
        { ...params, style: { strokeWidth: 2 } },
        filteredElements
      ) as any;
    });
  }, []);

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
