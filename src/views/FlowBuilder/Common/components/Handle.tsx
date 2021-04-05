import { getClassName } from '@utils/styles';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { Handle, HandleProps, useStoreState } from 'react-flow-renderer';

// Styles
import styles from './Handle.scss';

interface PropTypes extends HandleProps {
  className?: string;
  color?: Color;
  parentId?: string;
}

const FlowBuilderHandle: React.FC<PropTypes> = ({
  className,
  color = 'blue',
  id,
  parentId,
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
          ? source === parentId &&
            (!sourceHandle || (sourceHandle && sourceHandle === id))
          : target === parentId &&
            (!targetHandle || (targetHandle && targetHandle === id))
      ),
    [edges, id, parentId, type]
  );
  console.log(edges, parentId, id);
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
