import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-apollo';
import ReactFlow, { Node } from 'react-flow-renderer';

// Fleetly
import { BlockType } from '@fleetly/flow/dist/common/interfaces';

// Components
import ContextMenu, { MenuItem, MenuTitle } from '@components/ContextMenu';

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

  const [elements, setElements] = useState([]);

  // Memo
  useEffect(
    () =>
      setElements(
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
        ) as any
      ),
    [data, setElements]
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

  const [isOpened, setOpenState] = useState(false);
  const [position, setPosition] = useState<null | { x: number; y: number }>(
    null
  );

  const ref = useRef(null);

  useEffect(() => {
    if (ref && ref.current) {
      (ref.current as any).addEventListener(
        'contextmenu',
        (event: MouseEvent) => {
          event.preventDefault();

          setPosition({ x: event.x, y: event.y });
          setOpenState(true);
        }
      );
    }
  }, [ref]);

  const handleClick = () => {
    setElements(
      (elements) =>
        [
          ...elements,
          {
            id: '123',
            data: null as any,
            position: {
              x: (position?.x || 0) - 380,
              y: position?.y || 0
            },
            type: BlockType.ACTION
          }
        ] as any
    );

    setOpenState(false);
  };

  return (
    <>
      <ContextMenu
        onClose={() => setOpenState(false)}
        opened={isOpened}
        position={position as any}
      >
        <MenuTitle>New Block</MenuTitle>

        <MenuItem
          color="yellow"
          icon="fas fa-bolt"
          title="Action"
          onClick={handleClick}
        />
        <MenuItem color="purple" icon="fas fa-filter" title="Condition" />
        <MenuItem icon="fas fa-text" title="Content" />
        <MenuItem color="purple" icon="fas fa-random" title="Randomize" />
      </ContextMenu>

      <div ref={ref} style={{ height: '100%' }}>
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
      </div>
    </>
  );
};

export default Flow;
