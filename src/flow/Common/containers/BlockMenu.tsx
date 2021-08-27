import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';

// Fleetly
import { BlockType } from '@fleetly/flow/dist/common/interfaces';

// Components
import ContextMenu, {
  MenuItem,
  MenuTitle,
  PropTypes as ContextMenuProps
} from '@components/ContextMenu';

// GraphQL
import ADD_BLOCK from '../graphql/addBlock.gql';

// Store
import { useNotifications } from '@store';

const FlowBuilderBlockMenu: React.FC<ContextMenuProps> = ({
  onClose,
  ...props
}) => {
  // Setup
  const { flowId = '60897697e1a2ae00297c16fc' } = useParams<{
    flowId: string;
  }>();

  const { handleApolloError } = useNotifications();

  // Mutations
  const [addBlock] = useMutation(ADD_BLOCK);

  // Handlers
  const handleMenuItemClick = useCallback(
    async (event: React.SyntheticEvent<HTMLDivElement>) => {
      onClose && onClose(event);

      try {
        await addBlock({
          variables: {
            flowId,
            block: {
              title: 'Text',
              type: event.currentTarget.dataset.blockType
            }
          }
        });
      } catch (error) {
        return handleApolloError(error, { title: "Can't add block!" });
      }
    },
    [addBlock, flowId, handleApolloError, onClose]
  );

  return (
    <ContextMenu {...props} onClose={onClose}>
      <MenuTitle>New Block</MenuTitle>

      <MenuItem
        data-block-type={BlockType.ACTION}
        color="yellow"
        icon="fas fa-bolt"
        onClick={handleMenuItemClick}
        title="Action"
      />

      <MenuItem
        data-block-type={BlockType.CONDITION}
        color="purple"
        icon="fas fa-filter"
        onClick={handleMenuItemClick}
        title="Condition"
      />

      <MenuItem
        data-block-type={BlockType.CONTENT}
        icon="fas fa-text"
        onClick={handleMenuItemClick}
        title="Content"
      />

      <MenuItem
        data-block-type={BlockType.RANDOMIZE}
        color="purple"
        icon="fas fa-random"
        onClick={handleMenuItemClick}
        title="Randomize"
      />
    </ContextMenu>
  );
};

export default FlowBuilderBlockMenu;
