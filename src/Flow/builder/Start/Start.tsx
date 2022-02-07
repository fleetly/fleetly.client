import { useMutation } from '@apollo/client';
import React, { useCallback, useContext } from 'react';
import { NodeProps } from 'react-flow-renderer';

// API
import { ADD_ELEMENT } from '@flow/Flow.gql';

// Builder
import { Block, Button, BuilderContext, Elements } from '@flow/builder';

// Components
import {
  ContextMenu,
  ContextMenuColumn,
  ContextMenuItem,
  ContextMenuTitle,
  useContextMenu
} from '@components/ContextMenu';

// Elements
import { StartKeyword } from './Keyword';

// Interfaces
import { ElementType } from '@flow/interfaces';

// Store
import { useNotifications } from '@store';

export const Start: React.FC<NodeProps> = ({
  data: { elements, title },
  id,
  ...props
}) => {
  // Setup
  const { isEditable } = useContext(BuilderContext);
  const [menuProps, { closeMenu, handleMenuOpen }] = useContextMenu();
  const { handleApolloError } = useNotifications();

  // Mutations
  const [addElement] = useMutation(ADD_ELEMENT, {
    onError: handleApolloError
  });

  // Handlers
  const handleItemClick = useCallback(
    async (event: React.SyntheticEvent<HTMLElement>) => {
      await addElement({
        variables: {
          blockId: id,
          element: { payload: {}, type: event.currentTarget.dataset.type }
        }
      });

      closeMenu();
    },
    [addElement, closeMenu, id]
  );

  return (
    <Block
      {...props}
      color="green"
      editable={false}
      hasTarget={false}
      hasSource={false}
      icon="fas fa-play"
      id={id}
      subTitle="Start"
      title={title}
    >
      <Elements>
        {elements.map((element: any) => (
          <StartKeyword {...element} key={element.id} />
        ))}
      </Elements>

      {isEditable && (
        <>
          <Button onClick={handleMenuOpen}>Add Trigger</Button>

          <ContextMenu {...menuProps} placement="bottom" width={260}>
            <ContextMenuColumn>
              <ContextMenuTitle>Elements</ContextMenuTitle>

              <ContextMenuItem
                color="green"
                data-type={ElementType.START_KEYWORD}
                icon="far fa-font-case"
                onClick={handleItemClick}
                title="Message keyword"
              />
            </ContextMenuColumn>
          </ContextMenu>
        </>
      )}
    </Block>
  );
};
