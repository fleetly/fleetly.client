import classNames from 'classnames';
import React from 'react';

// Components
import { Caption, H5 } from '@components/Typography';

// Styles
import styles from './Header.scss';

interface Classes extends ExtendedClasses {
  actions?: string;
  avatar?: string;
  content?: string;
  subTitle?: string;
  title?: string;
}

interface PropTypes {
  actions?: React.ReactNode;
  avatar?: React.ReactNode;
  className?: string;
  classes?: Classes;
  subTitle?: string;
  title: string;
}

const CardHeader: React.FC<PropTypes> = ({
  actions,
  avatar,
  className,
  classes = {},
  subTitle,
  title
}) => (
  <div className={classNames(className, classes.root, styles.Root)}>
    {avatar && (
      <div className={classNames(classes.avatar, styles.Avatar)}>{avatar}</div>
    )}

    <div className={classNames(classes.content, styles.Content)}>
      {subTitle && (
        <Caption className={classNames(classes.subTitle, styles.SubTitle)}>
          {subTitle}
        </Caption>
      )}

      <H5 className={classNames(classes.title, styles.Title)}>{title}</H5>
    </div>

    {actions && (
      <div className={classNames(classes.actions, styles.Actions)}>
        {actions}
      </div>
    )}
  </div>
);

export default CardHeader;
