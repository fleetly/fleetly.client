import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

// Components
import Card from '@components/Card';
import Transition from '@components/Transition';

// Hooks
import { useOutsideClick } from '@hooks/events';

// Styles
import styles from './ContextMenu.scss';

export type ContextMenuPosition = 'bottom' | 'left' | 'top' | 'right';

export interface ContextMenuClasses extends ExtendedClasses {
  card?: string;
}

export interface ContextMenuProps {
  anchor?: HTMLElement;
  children?: React.ReactNode;
  classes?: ContextMenuClasses;
  onClose?(event: React.SyntheticEvent): void;
  opened?: boolean;
  position?: ContextMenuPosition;
  spacing?: number;
  width?: number;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  anchor,
  children,
  classes = {},
  onClose,
  opened,
  position: propPosition = 'right',
  spacing = 8,
  width
}) => {
  // Setup
  const ref = useOutsideClick<HTMLDivElement>(opened ? onClose : undefined);

  // State
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  });

  // Handlers
  const handleWindowResize = useCallback(() => {
    if (anchor && ref && ref.current) {
      const { left, top } = anchor.getBoundingClientRect();
      const $menu = ref.current as any;

      switch (propPosition) {
        case 'bottom':
          setPosition({
            x: left,
            y: top + anchor.clientHeight + spacing
          });
          break;
        case 'left':
        case 'right':
        case 'top':
          setPosition({
            x:
              left + $menu.clientWidth < window.innerWidth
                ? left + anchor.clientWidth + spacing
                : left - ($menu.clientWidth + spacing),
            y:
              top + $menu.clientHeight < window.innerHeight
                ? top
                : top +
                  (window.innerHeight - (top + spacing + $menu.clientHeight))
          });
          break;
      }
    }
  }, [anchor, propPosition, ref, spacing]);

  // Effects
  useEffect(() => {
    if (opened) {
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize as any);

      return () => {
        window.removeEventListener('resize', handleWindowResize as any);
      };
    }
  }, [handleWindowResize, opened]);

  return ReactDOM.createPortal(
    <Transition duration={150} enter="zoomIn" in={opened}>
      <div
        className={classNames(classes?.root, styles.Root)}
        ref={ref}
        style={{
          left: position?.x,
          position: 'absolute',
          top: position?.y,
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
