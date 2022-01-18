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

import { BlockContentText } from './components/Text';
import { BuilderButton } from '../../Common/components';

// Contexts
import { BuilderContext } from '../../Builder.context.ts';

// Fragments
import { BuilderBlock } from '../../Block';
import { BuilderElements } from '../../Elements';

// Interfaces
import { ElementType } from '@flow/interfaces';

// Store
import { useNotifications } from '@store';

export const BlockContent: React.FC<NodeProps> = ({
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
      color="blue"
      editable={isEditable}
      hasSource
      hasTarget
      icon="fas fa-text"
      id={id}
      subTitle="Content"
      title={title}
    >
      <BuilderElements>
        {elements.map((element: any) => (
          <BlockContentText {...element} key={element.id} />
        ))}
      </BuilderElements>

      {isEditable && (
        <>
          <BuilderButton onClick={handleMenuOpen}>Add Content</BuilderButton>

          <ContextMenu {...menuProps} position="bottom" width={260}>
            <ContextMenuColumn>
              <ContextMenuTitle>Elements</ContextMenuTitle>

              <ContextMenuItem
                color="blue"
                data-type={ElementType.CONTENT_TEXT}
                icon="far fa-font-case"
                onClick={handleItemClick}
                title="Text + Button"
              />
            </ContextMenuColumn>
          </ContextMenu>
        </>
      )}
    </BuilderBlock>
  );
};
