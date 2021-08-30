import React from 'react';
import { Position } from 'react-flow-renderer';

// Components
import Icon, { IconProps } from '@components/Icon';
import Card, { CardHeader, CardHeaderProps } from '@components/Card';

import Handle from './Handle';

// Styles
import styles from './Element.scss';

interface PropTypes extends CardHeaderProps, IconProps {
  id: string;
  blockId: string;
}

const FlowBuilderElement: React.FC<PropTypes> = ({
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

export default FlowBuilderElement;
