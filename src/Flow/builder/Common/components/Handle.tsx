import { getClassName } from '@utils/styles';
import classNames from 'classnames';
import React, { useContext, useMemo } from 'react';
import {
  Handle as FlowHandle,
  HandleProps as FlowHandleProps,
  useStoreState
} from 'react-flow-renderer';

// Contexts
import { BlockContext } from '@flow/builder';

// Styles
import styles from './Handle.scss';

export interface HandleProps extends FlowHandleProps {
  className?: string;
}

export const Handle: React.FC<HandleProps> = ({
  id,
  className,
  type,
  ...props
}) => {
  // Setup
  const { blockId, color = 'blue' } = useContext(BlockContext);
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
    <FlowHandle
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
