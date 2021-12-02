import React from 'react';
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';

// Blocks
import { BlockContent, BlockStart } from './blocks';

// Components
import Page, { Wrapper } from '@components/Page';
import { BuilderEdge } from './components/Edge';

// Containers
import { BuilderActions } from './containers/Actions';

// Hooks
import { useFlowBuilder } from './Builder.hooks';

// Interfaces
import { BlockType } from '@flow/interfaces';

// Styles
import styles from './Builder.scss';

export const Builder: React.FC = () => {
  // Setup
  const { elements, handleBlockDrag, handleEdgeConnect } = useFlowBuilder();

  return (
    <Page title="Flow Builder">
      <Wrapper classes={{ container: styles.Container }} title="Flow Builder">
        <ReactFlowProvider>
          <ReactFlow
            edgeTypes={{ default: BuilderEdge }}
            elements={elements}
            onConnect={handleEdgeConnect}
            onNodeDragStop={handleBlockDrag}
            nodeTypes={{
              [BlockType.CONTENT]: BlockContent,
              [BlockType.START]: BlockStart
            }}
            snapToGrid
          />

          <BuilderActions />
        </ReactFlowProvider>
      </Wrapper>
    </Page>
  );
};
