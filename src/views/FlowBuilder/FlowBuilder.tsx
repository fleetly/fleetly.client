import React from 'react';
import ReactFlow from 'react-flow-renderer';

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
  const elements = React.useMemo(
    () => [
      {
        id: '1',
        type: 'start',
        position: { x: 200, y: 400 }
      },
      {
        id: '2',
        position: { x: 550, y: 280 },
        type: 'randomize'
      },
      { id: 'e1-2', source: '1', target: '2', animated: true },
      {
        id: '3',
        position: { x: 550, y: 600 },
        type: 'condition'
      },
      {
        id: '4',
        position: { x: 900, y: 350 },
        type: 'content'
      },
      {
        id: '5',
        position: { x: 900, y: 520 },
        type: 'action'
      }
    ],
    []
  );

  return <ReactFlow elements={elements} nodeTypes={nodeTypes} />;
};

export default Flow;
