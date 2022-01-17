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
import { useBuilder } from './Builder.hooks';

// Interfaces
import { BlockType } from '@flow/interfaces';

// Routes
import { FLOW_ROUTES } from '@flow/Flow.routes';

// Styles
import styles from './Builder.scss';

export interface BuilderProps {
  readOnly: boolean;
}

export const Builder: React.FC<BuilderProps> = ({ readOnly }) => {
  // Setup
  const {
    companyId,
    elements,
    flowId,
    handleBlockDrag,
    handleEdgeConnect,
    title
  } = useBuilder();

  return (
    <Page title="Flow Builder">
      <div className={styles.Header}>
        <Breadcrumbs
          data={[
            {
              title: 'Flow',
              to: generatePath(FLOW_ROUTES.ROOT, { companyId })
            },
            ...(readOnly
              ? [
                  {
                    title
                  }
                ]
              : [
                  {
                    title,
                    to: generatePath(FLOW_ROUTES.FLOW, { companyId, flowId })
                  },
                  { title: 'Edit' }
                ])
          ]}
        />

        {readOnly ? (
          <Button
            color="blue"
            icon="far fa-edit"
            to={generatePath(FLOW_ROUTES.FLOW_EDIT, { companyId, flowId })}
            variant="outlined"
          >
            Edit
          </Button>
        ) : (
          <Button color="green" icon="fad fa-rocket-launch" variant="outlined">
            Publish
          </Button>
        )}
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
