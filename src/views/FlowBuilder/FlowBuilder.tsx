import React, { useCallback, useMemo } from 'react';
import { useMutation, useQuery } from 'react-apollo';
import ReactFlow, { Node } from 'react-flow-renderer';

// Fleetly
import { BlockType } from '@fleetly/flow/dist/common/interfaces';

// Containers
import Action from './Action';
import Condition from './Condition';
import Content from './Content';
import Randomize from './Randomize';
import Start from './Start';

// GraphQL
import GET_FLOW_BY_ID from './Common/graphql/getFlowById.gql';
import UPDATE_BLOCK from './Common/graphql/updateBlock.gql';

// Interfaces
import { IFlow } from '@interfaces/flow.interface';

const Flow: React.FC<{}> = () => {
  // Data
  const { data } = useQuery<{ flow: IFlow }>(GET_FLOW_BY_ID, {
    variables: { flowId: '60897697e1a2ae00297c16fc' }
  });

  // Mutations
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
  const handleNodeDrag = useCallback(
    async (event: React.SyntheticEvent, node: Node) => {
      try {
        await updateBlock({
          variables: { blockId: node.id, block: { position: node.position } }
        });
      } catch (error) {
        // Dispatch error notify
      }
    },
    [updateBlock]
  );

  return (
    <ReactFlow
      elements={elements}
      onNodeDragStop={handleNodeDrag}
      nodeTypes={{
        [BlockType.ACTION]: Action,
        [BlockType.CONDITION]: Condition,
        [BlockType.CONTENT]: Content,
        [BlockType.RANDOMIZE]: Randomize,
        [BlockType.START]: Start
      }}
      snapToGrid
    />
  );
};

export default Flow;
