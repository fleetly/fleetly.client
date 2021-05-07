import classNames from 'classnames';
import React from 'react';
import { Position } from 'react-flow-renderer';

// Components
import Button from '@components/Button';
import Card, { CardHeader } from '@components/Card';
import Icon from '@components/Icon';
import { Caption } from '@components/Typography';

import Handle from '../Handle';

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
  <div
    className={classNames(
      styles.Root,
      getClassName('color', { collection: styles, value: color }),
      { [styles.RootIsSelected]: selected }
    )}
  >
    <div className={styles.Actions}>
      <Button className={styles.Action} icon="far fa-cog" variant="outlined" />

      <Button
        className={styles.Action}
        color="danger"
        icon="far fa-trash-alt"
        variant="outlined"
      />
    </div>

    <Card className={styles.Card}>
      <CardHeader
        avatar={<Icon color={color} icon={icon} />}
        subTitle={subTitle}
        title={title}
      />

      {children}

      {hasSource && (
        <Caption className={styles.Next} component="div">
          Next Step
          <Handle
            blockId={id}
            className={styles.Source}
            color={color}
            position={Position.Right}
            type="source"
          />
        </Caption>
      )}

      {hasTarget && (
        <Handle
          blockId={id}
          className={styles.Target}
          color={color}
          position={Position.Left}
          type="target"
        />
      )}
    </Card>
  </div>
);

export default FlowBuilderBlock;
