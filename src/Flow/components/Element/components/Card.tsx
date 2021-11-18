import React from 'react';
import { Position } from 'react-flow-renderer';

// Components
import Card, { CardHeader, CardHeaderProps } from '@components/Card';
import Icon, { IconProps } from '@components/Icon';

import { Handle } from '../../Handle';

// Styles
import styles from './Card.scss';

export interface ElementCardProps extends CardHeaderProps, IconProps {
  id: string;
}

export const ElementCard: React.FC<ElementCardProps> = ({
  id,
  color = 'blue',
  icon,
  subTitle,
  title
}) => (
  <Card className={styles.Root}>
    <CardHeader
      actions={
        <Handle id={id} color={color} position={Position.Right} type="source" />
      }
      avatar={<Icon color={color} icon={icon} />}
      subTitle={subTitle}
      title={title}
    />
  </Card>
);
