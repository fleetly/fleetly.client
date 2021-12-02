import { ApolloError, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { useZoomPanHelper } from 'react-flow-renderer';
import { useParams } from 'react-router-dom';

// Components
import Button from '@components/Button';
import {
  ContextMenu,
  ContextMenuColumn,
  ContextMenuItem,
  ContextMenuTitle,
  useContextMenu
} from '@components/ContextMenu';

// GraphQL
import ADD_BLOCK from '../graphql/addBlock.gql';

// Interfaces
import { BlockType } from '@flow/interfaces';

// Store
import { useNotifications } from '@store';

// Styles
import styles from './Actions.scss';

export const BuilderActions: React.FC = () => {
  // Setup
  const { handleApolloError } = useNotifications();
  const { flowId } = useParams<{ flowId: string }>();
  const { zoomIn, zoomOut } = useZoomPanHelper();

  const [menuProps, { handleMenuOpen }] = useContextMenu();

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
        return handleApolloError(error as ApolloError);
      }
    },
    [addBlock, flowId, handleApolloError]
  );

  return (
    <div className={styles.Root}>
      <>
        <Button
          classes={{ root: styles.Add, icon: styles.AddIcon }}
          color="blue"
          icon="fas fa-layer-plus"
          onClick={handleMenuOpen}
        />

        <ContextMenu {...menuProps} width={200}>
          <ContextMenuColumn>
            <ContextMenuTitle>New Block</ContextMenuTitle>

            <ContextMenuItem
              data-block-type={BlockType.CONTENT}
              color="blue"
              icon="fas fa-text"
              onClick={handleMenuItemClick}
              title="Content"
            />

            <ContextMenuItem
              data-block-type={BlockType.ACTION}
              color="orange"
              icon="fas fa-bolt"
              title="Action"
            />

            <ContextMenuItem
              data-block-type={BlockType.CONDITION}
              color="purple"
              icon="fas fa-filter"
              title="Condition"
            />

            <ContextMenuItem
              data-block-type={BlockType.RANDOMIZE}
              color="purple"
              icon="fas fa-random"
              title="Randomize"
            />
          </ContextMenuColumn>
        </ContextMenu>
      </>

      <Button
        className={styles.Action}
        icon="far fa-plus"
        onClick={zoomIn}
        variant="outlined"
      />

      <Button
        className={styles.Action}
        icon="far fa-minus"
        onClick={zoomOut}
        variant="outlined"
      />
    </div>
  );
};
