import React from 'react';
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';
import { generatePath } from 'react-router-dom';

// Components
import Button from '@components/Button';
import Page, { Breadcrumbs } from '@components/Page';

// Fragments
import { BuilderActions } from './Actions';
import { BlockContent, BlockStart } from './Block';
import { BuilderEdge } from './Edge';

// Hooks
import { useFlowBuilder } from './Builder.hooks';

// Interfaces
import { BlockType } from '@flow/interfaces';

// Routes
import { FLOW_ROUTES } from '@flow/Flow.routes';

// Styles
import styles from './Builder.scss';

export const Builder: React.FC = () => {
  // Setup
  const {
    companyId,
    elements,
    handleBlockDrag,
    handleEdgeConnect,
    title
  } = useFlowBuilder();

  return (
    <Page title="Flow Builder">
      <div className={styles.Header}>
        <Breadcrumbs
          data={[
            {
              title: 'Flow',
              to: generatePath(FLOW_ROUTES.ROOT, { companyId })
            },
            { title, to: '/' }
          ]}
        />

        <Button color="green" variant="outlined">
          Publish
        </Button>

        <Button icon="far fa-cog" variant="outlined" />
      </div>

      {elements && elements.length > 0 && (
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
      )}
    </Page>
  );
};
