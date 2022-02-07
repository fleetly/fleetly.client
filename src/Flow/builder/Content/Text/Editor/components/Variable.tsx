import classNames from 'classnames';
import React, { useCallback } from 'react';
import { CustomElement, Transforms } from 'slate';
import {
  ReactEditor,
  RenderElementProps,
  useSelected,
  useSlate
} from 'slate-react';

// Components
import {
  ContextMenu,
  ContextMenuColumn,
  ContextMenuItem
} from '@components/ContextMenu';

// Styles
import styles from './Variable.scss';

export interface ContentTextEditorVariableProps extends RenderElementProps {
  variable: string;
}

export const ContentTextEditorVariable: React.FC<ContentTextEditorVariableProps> = ({
  attributes,
  children,
  element
}) => {
  // Setup
  const editor = useSlate();
  const isSelected = useSelected();

  // Handlers
  const handleItemClick = useCallback(
    (event) => {
      event.preventDefault();

      Transforms.setNodes<any>(
        editor,
        { variable: event.currentTarget.dataset.variable },
        { match: (node: any) => node.type === 'variable' }
      );
    },
    [editor]
  );

  return (
    <span
      {...attributes}
      className={classNames(styles.Root, {
        [styles.RootIsSelected]: isSelected
      })}
      contentEditable={false}
    >
      {(element as any).variable}
      {children}

      <ContextMenu
        anchor={attributes.ref.current}
        opened={isSelected}
        placement="bottom"
        portal={false}
        width={200}
      >
        <ContextMenuColumn>
          <ContextMenuItem
            data-variable="firstname"
            icon="far fa-text"
            onMouseDown={handleItemClick}
            title="First Name"
          />

          <ContextMenuItem
            data-variable="lastname"
            icon="far fa-text"
            onMouseDown={handleItemClick}
            title="Last Name"
          />
        </ContextMenuColumn>
      </ContextMenu>
    </span>
  );
};

export const withVariable = (editor: ReactEditor) => {
  const { isInline, isVoid } = editor;

  editor.isInline = (element: any) =>
    (element as CustomElement).type === 'variable' ? true : isInline(element);

  editor.isVoid = (element: any) =>
    (element as CustomElement).type === 'variable' ? true : isVoid(element);

  return editor;
};
