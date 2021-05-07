import React, { useCallback, useMemo } from 'react';
import { useMutation, useQuery } from 'react-apollo';
import { Connection, Edge, Elements, Node } from 'react-flow-renderer';
import { useParams } from 'react-router-dom';

// GraphQL
import ADD_EDGE from './Common/graphql/addEdge.gql';
import GET_FLOW_BY_ID from './Common/graphql/getFlowById.gql';
import UPDATE_BLOCK from './Common/graphql/updateBlock.gql';

// Interfaces
import { IFlow } from '@interfaces/flow.interface';

// Store
import { useNotifications } from '@store';

const useFlowBuilderApi = () => {
  // Setup
  const { flowId = '60897697e1a2ae00297c16fc' } = useParams<{
    flowId: string;
  }>();

  const { handleApolloError } = useNotifications();

  // Data
  const { data } = useQuery<{ flow: IFlow }>(GET_FLOW_BY_ID, {
    variables: { flowId }
  });

  // Mutations
  const [addEdge] = useMutation(ADD_EDGE);
  const [updateBlock] = useMutation(UPDATE_BLOCK);

  // Memo
  const elements = useMemo(() => {
    const result: Elements = [];

    if (data?.flow) {
      (data.flow.blocks || []).forEach(
        ({ id, elements, position, title, type }) =>
          result.push({
            id,
            data: {
              elements,
              title
            },
            position,
            type
          })
      );

      (data.flow.edges || []).forEach(
        ({ id, sourceId, sourceElementId, targetId }) =>
          result.push({
            id,
            target: targetId,
            source: sourceId,
            sourceHandle: sourceElementId,
            style: { strokeWidth: 2 }
          })
      );
    }

    return result;
  }, [data]);

  // Handlers
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

  const handleEdgeConnect = useCallback(
    async ({ target, source, sourceHandle }: Connection | Edge) => {
      const [elementId, handleId] = sourceHandle?.split('.') || [];

      try {
        await addEdge({
          variables: {
            sourceId: source,
            sourceElementId: elementId,
            sourceHandleId: handleId,
            targetId: target
          }
        });
      } catch (error) {
        return handleApolloError(error);
      }
    },
    [addEdge, handleApolloError]
  );

  return {
    elements,
    flowId,
    handleBlockDrag,
    handleEdgeConnect,
    title: data?.flow.title
  };
};

export { useFlowBuilderApi };
