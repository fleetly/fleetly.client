import React from 'react';
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

interface PropTypes {
  children: React.ReactNode;
  onClose?(event: React.SyntheticEvent): void;
  opened?: boolean;
  position?: Position;
}

const ContextMenu: React.FC<PropTypes> = ({
  children,
  onClose,
  opened,
  position
}) => {
  const ref = useOutsideClick(onClose);

  return ReactDOM.createPortal(
    <Transition duration={400} enter="fadeIn" in={opened}>
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
