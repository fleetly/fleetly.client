import { Placement } from '@floating-ui/core';
import {
  getScrollParents,
  flip,
  offset,
  shift,
  useFloating
} from '@floating-ui/react-dom';
import classNames from 'classnames';
import React, { useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

// Components
import Card from '@components/Card';
import Transition from '@components/Transition';

// Hooks
import { useOutsideClick } from '@hooks/events';

// Styles
import styles from './ContextMenu.scss';

export interface ContextMenuClasses extends ExtendedClasses {
  card?: string;
}

export interface ContextMenuProps {
  anchor?: HTMLElement;
  children?: React.ReactNode;
  classes?: ContextMenuClasses;
  onClose?(event: React.SyntheticEvent): void;
  opened?: boolean;
  placement?: Placement;
  width?: number;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  anchor,
  children,
  classes = {},
  onClose,
  opened,
  placement = 'right-start',
  width
}) => {
  // Setup
  const { floating, refs, reference, strategy, update, x, y } = useFloating({
    placement,
    middleware: [flip(), offset(4), shift()]
  });

  useOutsideClick<HTMLDivElement>(opened ? onClose : undefined, refs.floating);

  // Effects
  useEffect(() => {
    if (!refs.reference.current || !refs.floating.current) {
      return;
    }

    const parents = [
      ...getScrollParents(refs.reference.current),
      ...getScrollParents(refs.floating.current)
    ];

    parents.forEach((parent) => {
      parent.addEventListener('scroll', update);
      parent.addEventListener('resize', update);
    });

    return () => {
      parents.forEach((parent) => {
        parent.removeEventListener('scroll', update);
        parent.removeEventListener('resize', update);
      });
    };
  }, [refs.reference, refs.floating, update, refs]);

  useLayoutEffect(() => {
    anchor && reference(anchor as any);
  }, [anchor, reference, update]);

  return ReactDOM.createPortal(
    <Transition duration={150} enter="zoomIn" in={opened}>
      <div
        className={classNames(classes?.root, styles.Root)}
        ref={floating}
        style={{
          left: `${x}px`,
          position: strategy,
          top: `${y}px`,
          width
        }}
      >
        <Card className={classNames(classes?.card, styles.Card)}>
          {children}
        </Card>
      </div>
    </Transition>,
    document.getElementById('portal') as HTMLElement
  );
};
