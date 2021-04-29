import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Card from '@components/Card';

// Styles
import styles from './ContextMenu.scss';

const ContextMenu: React.FC<{}> = ({ children }) =>
  ReactDOM.createPortal(
    <Card className={styles.Root}>{children}</Card>,
    document.getElementById('portal') as HTMLElement
  );

export default ContextMenu;
