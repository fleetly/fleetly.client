import React from 'react';
import { Position } from 'react-flow-renderer';

// Components
import Icon, { IconProps } from '@components/Icon';
import Card, { CardHeader, CardHeaderProps } from '@components/Card';

import { Handle } from './Handle';

// Styles
import styles from './Element.scss';

export interface ElementProps extends CardHeaderProps, IconProps {
  id: string;
  blockId: string;
}

export const Element: React.FC<ElementProps> = ({
  id,
  blockId,
  color = 'blue',
  icon,
  subTitle,
  title
}) => (
  <Card className={styles.Root}>
    <CardHeader
      actions={
        <Handle
          id={id}
          blockId={blockId}
          color={color}
          position={Position.Right}
          type="source"
        />
      }
      avatar={<Icon color={color} icon={icon} />}
      subTitle={subTitle}
      title={title}
    />
  </Card>
);
