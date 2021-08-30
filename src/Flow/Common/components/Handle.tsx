import { getClassName } from '@utils/styles';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { Handle, HandleProps, useStoreState } from 'react-flow-renderer';

// Styles
import styles from './Handle.scss';

interface PropTypes extends HandleProps {
  blockId?: string;
  className?: string;
  color?: Color;
}

const FlowBuilderHandle: React.FC<PropTypes> = ({
  id,
  className,
  color = 'blue',
  blockId,
  type,
  ...props
}) => {
  // Setup
  const edges = useStoreState(({ edges }) => edges);

  // @todo - make it better
  const isConnected = useMemo(
    () =>
      !!edges.find(({ source, sourceHandle, target, targetHandle }) =>
        type === 'source'
          ? source === blockId &&
            (!sourceHandle || (sourceHandle && sourceHandle === id))
          : target === blockId &&
            (!targetHandle || (targetHandle && targetHandle === id))
      ),
    [id, blockId, edges, type]
  );

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
      id={id}
      type={type}
    />
  );
};

export default FlowBuilderHandle;
