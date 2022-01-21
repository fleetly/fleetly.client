import React from 'react';
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';

// Contexts
import { BuilderContext } from './Builder.context';

// Fragments
import { BuilderActions } from './Actions';
import { BlockContent, BlockRandomize, BlockStart } from './Block';
import { BuilderEdge } from './Edge';

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
          edgeTypes={{ default: BuilderEdge }}
          elements={elements}
          onConnect={handleEdgeConnect}
          onNodeDragStop={handleBlockDrag}
          nodesConnectable={!!editable}
          nodesDraggable={!!editable}
          nodeTypes={{
            [BlockType.CONTENT]: BlockContent,
            [BlockType.RANDOMIZE]: BlockRandomize,
            [BlockType.START]: BlockStart
          }}
          snapToGrid
        />

        <BuilderActions />
      </ReactFlowProvider>
    </BuilderContext.Provider>
  );
};
