import React from 'react';
import { useZoomPanHelper } from 'react-flow-renderer';

// Components
import Button from '@components/Button';

// Styles
import styles from './Zoom.scss';

const FlowBuilderZoom = () => {
  // Setup
  const { zoomIn, zoomOut } = useZoomPanHelper();

  return (
    <>
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
    </>
  );
};

export default FlowBuilderZoom;
