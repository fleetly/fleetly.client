import { getClassName } from '@utils/styles';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { Handle, HandleProps, useStoreState } from 'react-flow-renderer';

// Styles
import styles from './Handle.scss';

interface PropTypes extends HandleProps {
  className?: string;
  color?: Color;
}

const FlowBuilderHandle: React.FC<PropTypes> = ({
  className,
  color = 'blue',
  id,
  type,
  ...props
}) => {
  // Setup
  const edges = useStoreState(({ edges }) => edges);

  const isConnected = useMemo(() => !!edges.find((edge) => edge[type] === id), [
    edges,
    id,
    type
  ]);

  return (
    <Handle
      {...props}
      className={classNames(
        className,
        styles.Root,
        getClassName('color', { collection: styles, value: color }),
        {
          [styles.RootIsConnected]: isConnected
        }
      )}
      type={type}
    />
  );
};

export default FlowBuilderHandle;
