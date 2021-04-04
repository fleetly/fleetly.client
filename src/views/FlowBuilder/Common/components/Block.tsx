import classNames from 'classnames';
import React from 'react';
import { Handle, Position, useStoreState } from 'react-flow-renderer';

// Components
import Card, { CardHeader } from '@components/Card';
import { Caption } from '@components/Typography';

// Styles
import styles from './Block.scss';

// Utils
import { getClassName } from '@utils/styles';

interface PropTypes {
  children?: React.ReactNode;
  className?: string;
  color?: Color;
  icon?: string;
  id?: string;
  hasSource?: boolean;
  hasTarget?: boolean;
  selected?: boolean;
  subTitle?: string;
  title: string;
}

const FlowBuilderBlock: React.FC<PropTypes> = ({
  children,
  color = 'blue',
  icon = 'fas fa-user',
  hasSource = true,
  hasTarget = true,
  id,
  selected,
  subTitle,
  title
}) => {
  const edges = useStoreState(({ edges }) => edges);

  const sourceIsConnected = !!edges.find(({ source }) => source === id);
  const targetIsConnected = !!edges.find(({ target }) => target === id);

  return (
    <Card
      className={classNames(
        styles.Root,
        getClassName('color', { collection: styles, value: color }),
        { [styles.RootIsSelected]: selected }
      )}
    >
      <CardHeader
        avatar={<i className={classNames(styles.Icon, icon)} />}
        subTitle={subTitle}
        title={title}
      />

      {children}

      {hasSource && (
        <Caption className={styles.Source} component="div">
          Next Step
          <Handle
            className={classNames(styles.Handle, {
              [styles.HandleIsConnected]: sourceIsConnected
            })}
            position={Position.Right}
            type="source"
          />
        </Caption>
      )}

      {hasTarget && (
        <Handle
          className={classNames(styles.Handle, styles.Target, {
            [styles.HandleIsConnected]: targetIsConnected
          })}
          position={Position.Left}
          type="target"
        />
      )}
    </Card>
  );
};

export default FlowBuilderBlock;
