import React from 'react';
import { Position } from 'react-flow-renderer';

// Components
import Card, { CardHeader } from '@components/Card';
import Icon from '@components/Icon';

import { Handle } from './Handle';

// Styles
import styles from './Element.scss';

export interface ElementProps {
  color?: Color;
  id: string;
  icon: string;
  subTitle?: string;
  title: string;
}

export const Element: React.FC<ElementProps> = ({
  id,
  color = 'blue',
  icon,
  subTitle,
  title
}) => (
  <Card className={styles.Root}>
    <CardHeader
      actions={<Handle id={id} position={Position.Right} type="source" />}
      avatar={<Icon color={color} icon={icon} />}
      subTitle={subTitle}
      title={title}
    />
  </Card>
);
