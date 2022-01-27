import classNames from 'classnames';
import React from 'react';
import { CustomElement } from 'slate';
import { ReactEditor, RenderElementProps, useSelected } from 'slate-react';

// Components
import {
  ContextMenu,
  ContextMenuColumn,
  ContextMenuItem,
  useContextMenu
} from '@components/ContextMenu';

// Styles
import styles from './Variable.scss';

export interface BlockContentTextVariableProps extends RenderElementProps {
  variable: string;
}

export const BlockContentTextVariable: React.FC<BlockContentTextVariableProps> = ({
  attributes,
  children,
  element
}) => {
  // Setup
  const [menuProps, { handleMenuOpen }] = useContextMenu();
  const selected = useSelected();

  return (
    <>
      <span
        {...attributes}
        className={classNames(styles.Root, {
          [styles.RootIsSelected]: selected
        })}
        contentEditable={false}
        onClick={handleMenuOpen}
      >
        {(element as any).variable}
        {children}
      </span>

      <ContextMenu {...menuProps} position="bottom">
        <ContextMenuColumn>
          <ContextMenuItem icon="far fa-text" title="First Name" />
          <ContextMenuItem icon="far fa-text" title="Last Name" />
          <ContextMenuItem icon="far fa-text" title="Full Name" />
        </ContextMenuColumn>
      </ContextMenu>
    </>
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
