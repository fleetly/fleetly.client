import { getClassName } from '@utils/styles';
import classNames from 'classnames';
import React, { useContext, useMemo } from 'react';
import { Handle, HandleProps, useStoreState } from 'react-flow-renderer';

// Contexts
import { BuilderBlockContext } from '../../Block';

// Styles
import styles from './Handle.scss';

export interface BuilderHandleProps extends HandleProps {
  className?: string;
}

export const BuilderHandle: React.FC<BuilderHandleProps> = ({
  id,
  className,
  type,
  ...props
}) => {
  // Setup
  const { blockId, color = 'blue' } = useContext(BuilderBlockContext);
  const edges = useStoreState(({ edges }) => edges);

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
