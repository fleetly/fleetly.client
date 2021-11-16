import { useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

// Fleetly
import { BlockType } from '@fleetly/flow/entities';

// Components
import ContextMenu, {
  MenuItem,
  MenuTitle,
  ContextMenuProps
} from '@components/ContextMenu';

// GraphQL
import ADD_BLOCK from '../graphql/addBlock.gql';

// Store
import { useNotifications } from '@store';

export const BuilderMenu: React.FC<ContextMenuProps> = () => {
  // Setup
  const { handleApolloError } = useNotifications();
  const { flowId } = useParams<{ flowId: string }>();

  // Mutations
  const [addBlock] = useMutation(ADD_BLOCK);

  // Handlers
  const handleMenuItemClick = useCallback(
    async (event: React.SyntheticEvent<HTMLDivElement>) => {
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
        return handleApolloError(error);
      }
    },
    [addBlock, flowId, handleApolloError]
  );

  return (
    <ContextMenu>
      <MenuTitle>New Block</MenuTitle>

      <MenuItem
        data-block-type={BlockType.ACTION}
        color="yellow"
        icon="fas fa-bolt"
        onClick={handleMenuItemClick}
        title="Action"
      />
    </ContextMenu>
  );
};
