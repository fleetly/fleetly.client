import React from 'react';
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';
import { generatePath } from 'react-router-dom';

// Components
import Button from '@components/Button';
import Page, { Breadcrumbs } from '@components/Page';

// Contexts
import { BuilderContext } from './Builder.context';

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
  editable?: boolean;
}

export const Builder: React.FC<BuilderProps> = ({ editable }) => {
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
            ...(editable
              ? [
                  {
                    title,
                    to: generatePath(FLOW_ROUTES.FLOW, { companyId, flowId })
                  },
                  { title: 'Edit' }
                ]
              : [
                  {
                    title
                  }
                ])
          ]}
        />

        {editable ? (
          <Button color="green" icon="fad fa-rocket-launch" variant="outlined">
            Publish
          </Button>
        ) : (
          <Button
            color="blue"
            icon="far fa-edit"
            to={generatePath(FLOW_ROUTES.FLOW_EDIT, { companyId, flowId })}
            variant="outlined"
          >
            Edit
          </Button>
        )}
      </div>

      {elements && elements.length > 0 && (
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
                [BlockType.START]: BlockStart
              }}
              snapToGrid
            />

            <BuilderActions />
          </ReactFlowProvider>
        </BuilderContext.Provider>
      )}
    </Page>
  );
};
