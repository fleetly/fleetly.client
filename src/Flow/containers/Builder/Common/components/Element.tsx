import React from 'react';
import { Position } from 'react-flow-renderer';

// Components
import Card, { CardHeader } from '@components/Card';
import Icon from '@components/Icon';

import { BlockHandle } from './Handle';

// Styles
import styles from './Element.scss';

export interface BuilderElementProps {
  color?: Color;
  id: string;
  icon: string;
  subTitle?: string;
  title: string;
}

export const BuilderElement: React.FC<BuilderElementProps> = ({
  id,
  color = 'blue',
  icon,
  subTitle,
  title
}) => (
  <Card className={styles.Root}>
    <CardHeader
      actions={<BlockHandle id={id} position={Position.Right} type="source" />}
      avatar={<Icon color={color} icon={icon} />}
      subTitle={subTitle}
      title={title}
    />
  </Card>
);
