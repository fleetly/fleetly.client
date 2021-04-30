import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

// Components
import Card from '@components/Card';
import Transition from '@components/Transition';

// Hooks
import { useOutsideClick } from '@hooks/events';

// Styles
import styles from './ContextMenu.scss';

interface Position {
  x?: number;
  y?: number;
}

export interface PropTypes {
  anchor?: HTMLElement;
  children?: React.ReactNode;
  onClose?(event: React.SyntheticEvent): void;
  opened?: boolean;
  position?: Position;
  spacing?: number;
}

const ContextMenu: React.FC<PropTypes> = ({
  anchor,
  children,
  onClose,
  opened,
  spacing = 8
}) => {
  // Setup
  const ref = useOutsideClick(opened ? onClose : undefined);

  // State
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  });

  // Effects
  useEffect(() => {
    if (anchor && ref && ref.current) {
      const handleWindowResize = (event?: React.SyntheticEvent) => {
        const { left, top } = anchor.getBoundingClientRect();
        const $menu = ref.current as any;

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
      };

      handleWindowResize();

      window.addEventListener('resize', handleWindowResize as any);

      return () => {
        window.removeEventListener('resize', handleWindowResize as any);
      };
    }
  }, [anchor, ref, spacing]);

  return ReactDOM.createPortal(
    <Transition duration={100} enter="zoomIn" in={opened}>
      <div
        className={styles.Root}
        ref={ref}
        style={{ left: position?.x, position: 'absolute', top: position?.y }}
      >
        <Card className={styles.Card}>{children}</Card>
      </div>
    </Transition>,
    document.getElementById('portal') as HTMLElement
  );
};

export default ContextMenu;
