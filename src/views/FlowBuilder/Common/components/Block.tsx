import classNames from 'classnames';
import React from 'react';

// Components
import Card, { CardHeader } from '@components/Card';

// Styles
import styles from './Block.scss';

// Utils
import { getClassName } from '@utils/styles';

interface PropTypes {
  children?: React.ReactNode;
  className?: string;
  color?: Color;
  icon?: string;
  selected?: boolean;
  subTitle?: string;
  title: string;
}

const FlowBuilderBlock: React.FC<PropTypes> = ({
  children,
  color = 'blue',
  icon = 'fas fa-user',
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
  </Card>
);

export default FlowBuilderBlock;
