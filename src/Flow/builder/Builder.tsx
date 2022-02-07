import React from 'react';
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';

// Components
import { Actions, Edge } from './Common';

// Contexts
import { BuilderContext } from './Common';

// Fragments
import { Content } from './Content';
import { Randomize } from './Randomize';
import { Start } from './Start';

// Hooks
import { useBuilder } from './Builder.hooks';

// Interfaces
import { BlockType, Flow } from '@flow/interfaces';

export interface BuilderProps extends Flow {
  editable?: boolean;
}

export const Builder: React.FC<BuilderProps> = ({ editable, ...flow }) => {
  // Setup
  const { elements, handleBlockDrag, handleEdgeConnect } = useBuilder(
    flow,
    !!editable
  );

  return (
    <BuilderContext.Provider value={{ isEditable: !!editable }}>
      <ReactFlowProvider>
        <ReactFlow
          edgeTypes={{ default: Edge }}
          elements={elements}
          onConnect={handleEdgeConnect}
          onNodeDragStop={handleBlockDrag}
          nodesConnectable={!!editable}
          nodesDraggable={!!editable}
          nodeTypes={{
            [BlockType.CONTENT]: Content,
            [BlockType.RANDOMIZE]: Randomize,
            [BlockType.START]: Start
          }}
          snapToGrid
        />

        <Actions />
      </ReactFlowProvider>
    </BuilderContext.Provider>
  );
};
