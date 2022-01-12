import { ApolloError, useMutation } from '@apollo/client';
import React, { useCallback, useEffect } from 'react';
import { useStore, useZoomPanHelper } from 'react-flow-renderer';
import { useParams } from 'react-router-dom';

// API
import { ADD_BLOCK } from '@flow/Flow.gql';

// Components
import Button from '@components/Button';
import {
  ContextMenu,
  ContextMenuColumn,
  ContextMenuItem,
  ContextMenuTitle,
  useContextMenu
} from '@components/ContextMenu';

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
  const store = useStore();
  const { setCenter, zoomIn, zoomOut } = useZoomPanHelper();

  const [menuProps, { closeMenu, handleMenuOpen }] = useContextMenu();

  // API
  const [addBlock] = useMutation(ADD_BLOCK);

  // Effects
  useEffect(() => {
    const { nodes } = store.getState();

    if (nodes.length) {
      setCenter(
        nodes[0].__rf.position.x + nodes[0].__rf.width / 2,
        nodes[0].__rf.position.y + nodes[0].__rf.height / 2,
        1
      );
    }
  }, [setCenter, store]);

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

        closeMenu();
      } catch (error) {
        return handleApolloError(error as ApolloError);
      }
    },
    [addBlock, closeMenu, flowId, handleApolloError]
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
