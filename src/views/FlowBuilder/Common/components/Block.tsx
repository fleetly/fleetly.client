import classNames from 'classnames';
import React from 'react';
import { Position } from 'react-flow-renderer';

// Components
import Card, { CardHeader } from '@components/Card';
import { Caption } from '@components/Typography';

import Handle from './Handle';

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
}) => (
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
      <Caption className={styles.Next} component="div">
        Next Step
        <Handle
          className={styles.Source}
          color={color}
          id={id}
          position={Position.Right}
          type="source"
        />
      </Caption>
    )}

    {hasTarget && (
      <Handle
        className={styles.Target}
        color={color}
        id={id}
        position={Position.Left}
        type="target"
      />
    )}
  </Card>
);

export default FlowBuilderBlock;
