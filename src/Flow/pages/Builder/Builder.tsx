import React from 'react';
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';

// Blocks
import { BlockContent, BlockStart } from './blocks';

// Components
import Button from '@components/Button';
import Page, { Breadcrumbs } from '@components/Page';
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
      <div className={styles.Header}>
        <Breadcrumbs
          data={[
            { title: 'Flow', to: '/' },
            { title: 'Test Flow', to: '/' }
          ]}
        />

        <Button color="green" variant="outlined">
          Publish
        </Button>

        <Button icon="far fa-cog" variant="outlined" />
      </div>

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
    </Page>
  );
};
