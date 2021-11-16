import React from 'react';
import { useZoomPanHelper } from 'react-flow-renderer';

// Components
import Button from '@components/Button';

// Styles
import styles from './Actions.scss';

export const BuilderActions: React.FC = () => {
  // Setup
  const { zoomIn, zoomOut } = useZoomPanHelper();

  return (
    <div className={styles.Root}>
      <Button
        classes={{ root: styles.Add, icon: styles.AddIcon }}
        color="blue"
        icon="fas fa-layer-plus"
      />

      <Button
        className={styles.Action}
        icon="far fa-plus"
        onClick={zoomIn}
        variant="outlined"
      />

      <Button
        className={styles.Action}
        icon="far fa-minus"
        onClick={zoomOut}
        variant="outlined"
      />
    </div>
  );
};
