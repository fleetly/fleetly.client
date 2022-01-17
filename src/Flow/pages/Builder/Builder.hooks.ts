import { ApolloError, useMutation, useQuery } from '@apollo/client';
import React, { useCallback, useMemo } from 'react';
import { Connection, Edge, Elements, Node } from 'react-flow-renderer';
import { useParams } from 'react-router-dom';

// API
import { ADD_EDGE, GET_FLOW, UPDATE_BLOCK } from '@flow/Flow.gql';

// Interfaces
import { Flow } from '@flow/interfaces/flow.interface';

// Store
import { useNotifications } from '@store';

export const useBuilder = () => {
  // Setup
  const { companyId, flowId } = useParams<{
    companyId: string;
    flowId: string;
  }>();

  const { handleApolloError } = useNotifications();

  // Data
  const { data } = useQuery<{ flow: Flow }>(GET_FLOW, {
    variables: { flowId }
  });

  // Mutations
  const [addEdge] = useMutation(ADD_EDGE);
  const [updateBlock] = useMutation(UPDATE_BLOCK);

  // Memo
  const elements = useMemo(() => {
    const result: Elements = [];

    if (data?.flow) {
      (data.flow.draft.blocks || []).forEach(
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

      (data.flow.draft.edges || []).forEach(
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
    async (_: React.SyntheticEvent, node: Node) => {
      try {
        await updateBlock({
          variables: { blockId: node.id, block: { position: node.position } }
        });
      } catch (error) {
        return handleApolloError(error as ApolloError);
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
        return handleApolloError(error as ApolloError);
      }
    },
    [addEdge, handleApolloError]
  );

  return {
    companyId,
    elements,
    flowId,
    handleBlockDrag,
    handleEdgeConnect,
    title: data?.flow.title || 'Untitled'
  };
};
