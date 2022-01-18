import { useMutation } from '@apollo/client';
import React, { useCallback, useContext } from 'react';
import { NodeProps } from 'react-flow-renderer';

// API
import { ADD_ELEMENT } from '@flow/Flow.gql';

// Components
import {
  ContextMenu,
  ContextMenuColumn,
  ContextMenuItem,
  ContextMenuTitle,
  useContextMenu
} from '@components/ContextMenu';

import { BuilderButton } from '../../Common/components';

// Contexts
import { BuilderContext } from '../../Builder.context.ts';

// Elements
import { BlockStartKeyword } from './components/Keyword';

// Fragments
import { BuilderBlock } from '../../Block';
import { BuilderElements } from '../../Elements';

// Interfaces
import { ElementType } from '@flow/interfaces';

// Store
import { useNotifications } from '@store';

export const BlockStart: React.FC<NodeProps> = ({
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
    <BuilderBlock
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
      <BuilderElements>
        {elements.map((element: any) => (
          <BlockStartKeyword {...element} key={element.id} />
        ))}
      </BuilderElements>

      {isEditable && (
        <>
          <BuilderButton onClick={handleMenuOpen}>Add Trigger</BuilderButton>

          <ContextMenu {...menuProps} position="bottom" width={260}>
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
    </BuilderBlock>
  );
};
