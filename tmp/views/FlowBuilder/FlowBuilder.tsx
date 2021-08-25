import React from 'react';
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';

// Fleetly
import { BlockType } from '@fleetly/flow/dist/common/interfaces';

// Components
import Button from '@components/Button';
import { useContextMenu } from '@components/ContextMenu';
import Page, { Wrapper } from '@components/Page';

// Containers
import BlockMenu from './Common/containers/BlockMenu';
import Zoom from './Common/containers/Zoom';

// Hooks
import { useFlowBuilderApi } from './FlowBuilder.hooks';

// Nodes
import Action from './Action';
import Condition from './Condition';
import Content from './Content';
import Randomize from './Randomize';
import Start from './Start';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './FlowBuilder.scss';

// Utils
import { fillUrl } from '@utils/url';
import { useParams } from 'react-router-dom';

const Flow: React.FC<{}> = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();
  const [blockMenuProps, { handleMenuOpen }] = useContextMenu();

  const {
    elements,
    flowId,
    handleBlockDrag,
    handleEdgeConnect,
    title = 'Untitled flow'
  } = useFlowBuilderApi();

  return (
    <Page title={title}>
      <Wrapper
        breadcrumbs={[
          {
            title: 'Flows',
            to: fillUrl(ROUTES.COMPANY.FLOWS.ROOT, { companyId })
          },
          {
            title,
            to: fillUrl(ROUTES.COMPANY.FLOWS.FLOW, { flowId, companyId })
          }
        ]}
        classes={{ container: styles.Container }}
      >
        <ReactFlowProvider>
          <div className={styles.Builder}>
            <ReactFlow
              elements={elements}
              onConnect={handleEdgeConnect}
              onNodeDragStop={handleBlockDrag}
              nodeTypes={{
                [BlockType.ACTION]: Action,
                [BlockType.CONDITION]: Condition,
                [BlockType.CONTENT]: Content,
                [BlockType.RANDOMIZE]: Randomize,
                [BlockType.START]: Start
              }}
              snapToGrid
            />

            <div className={styles.Actions}>
              <Button
                classes={{ root: styles.Add, icon: styles.AddIcon }}
                color="primary"
                icon="fas fa-layer-plus"
                key="123"
                onClick={handleMenuOpen}
              />

              <Zoom />
            </div>
          </div>
        </ReactFlowProvider>
      </Wrapper>

      <BlockMenu {...blockMenuProps} />
    </Page>
  );
};

export default Flow;
