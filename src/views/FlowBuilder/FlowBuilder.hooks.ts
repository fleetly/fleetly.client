import React, { useCallback, useMemo } from 'react';
import { useMutation, useQuery } from 'react-apollo';
import { Node } from 'react-flow-renderer';

// GraphQL
import GET_FLOW_BY_ID from './Common/graphql/getFlowById.gql';

import ADD_BLOCK from './Common/graphql/addBlock.gql';
import UPDATE_BLOCK from './Common/graphql/updateBlock.gql';

// Interfaces
import { IFlow } from '@interfaces/flow.interface';

// Store
import { useNotifications } from '@store';

const useFlowBuilderApi = () => {
  // Setup
  const flowId = '60897697e1a2ae00297c16fc';
  const { handleApolloError } = useNotifications();

  // Data
  const { data } = useQuery<{ flow: IFlow }>(GET_FLOW_BY_ID, {
    variables: { flowId }
  });

  // Mutations
  const [addBlockMutation] = useMutation(ADD_BLOCK);
  const [updateBlock] = useMutation(UPDATE_BLOCK);

  // Memo
  const elements = useMemo(
    () =>
      (data?.flow.blocks || []).map(
        ({ id, elements, position, title, type }) => ({
          id,
          data: {
            elements,
            title
          },
          position,
          type
        })
      ),
    [data]
  );

  // Handlers
  const addBlock = useCallback(
    async ({ title, type }) => {
      try {
        return await addBlockMutation({
          variables: {
            flowId,
            block: {
              title,
              type
            }
          }
        });
      } catch (error) {
        return handleApolloError(error, { title: "Can't add block!" });
      }
    },
    [addBlockMutation, handleApolloError]
  );

  const handleBlockDrag = useCallback(
    async (event: React.SyntheticEvent, node: Node) => {
      try {
        await updateBlock({
          variables: { blockId: node.id, block: { position: node.position } }
        });
      } catch (error) {
        return handleApolloError(error);
        // Dispatch error notify
      }
    },
    [handleApolloError, updateBlock]
  );

  return {
    addBlock,
    elements,
    flowId,
    handleBlockDrag,
    title: data?.flow.title
  };
};

export { useFlowBuilderApi };
