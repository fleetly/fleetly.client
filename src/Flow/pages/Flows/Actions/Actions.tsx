import { useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

// API
import { DELETE_FLOW, GET_FLOWS } from '@flow/Flow.gql';

// Components
import Button from '@components/Button';
import {
  ContextMenu,
  ContextMenuColumn,
  ContextMenuItem,
  useContextMenu
} from '@components/ContextMenu';

// Containers
import { CONFIRM_PRESET, useConfirm } from '@containers/Confirm';

// Hooks
import { useFlowsCreate } from '../Create';

// Interfaces
import { Flow } from '@flow/interfaces/flow.interface';

// Store
import { useNotifications } from '@store';

export const FlowsActions: React.FC<Flow> = (props) => {
  const { id, channels, title } = props;

  // Setup
  const { confirm } = useConfirm();
  const [menuProps, { handleMenuOpen }] = useContextMenu();
  const { modal } = useFlowsCreate();
  const { handleApolloError } = useNotifications();
  const { companyId } = useParams<{ companyId: string }>();

  // API
  const [deleteFlow] = useMutation(DELETE_FLOW, {
    onError: handleApolloError,
    refetchQueries: [{ query: GET_FLOWS, variables: { companyId } }]
  });

  // Handlers
  const handleEditClick = useCallback(
    (event: React.SyntheticEvent<HTMLElement>) => {
      event.stopPropagation();
      modal.openModal({
        data: { id, channels: channels.map(({ id }) => id), title },
        title: 'Update the Flow'
      });
    },
    [channels, id, modal, title]
  );

  const handleRemoveClick = useCallback(
    async (event: React.SyntheticEvent<HTMLElement>) => {
      event.stopPropagation();

      await confirm(CONFIRM_PRESET.DELETE(props));
      await deleteFlow({ variables: { flowId: props.id } });
    },
    [confirm, deleteFlow, props]
  );

  return (
    <>
      <Button
        icon="fas fa-ellipsis-v"
        onClick={handleMenuOpen}
        variant="outlined"
      />

      <ContextMenu {...menuProps}>
        <ContextMenuColumn>
          <ContextMenuItem
            icon="fas fa-edit"
            onClick={handleEditClick}
            title="Edit Flow"
          />

          <ContextMenuItem
            color="orange"
            icon="fas fa-power-off"
            title="Disable"
          />

          <ContextMenuItem
            color="red"
            icon="fas fa-trash-alt"
            onClick={handleRemoveClick}
            title="Delete"
          />
        </ContextMenuColumn>
      </ContextMenu>
    </>
  );
};
