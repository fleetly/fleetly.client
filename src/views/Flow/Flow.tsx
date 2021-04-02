import React from 'react';
import ReactFlow from 'react-flow-renderer';

const Flow = () => {
  const elements = React.useMemo(
    () => [
      {
        id: '1',
        type: 'input',
        data: { label: 'Node 1' },
        position: { x: 400, y: 400 }
      },
      {
        id: '2',
        data: { label: <div>Node 2</div> },
        position: { x: 500, y: 500 }
      },
      { id: 'e1-2', source: '1', target: '2', animated: true }
    ],
    []
  );

  return <ReactFlow elements={elements} />;
};

export default Flow;
