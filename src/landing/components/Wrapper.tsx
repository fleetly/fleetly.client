import classNames from 'classnames';
import React from 'react';

// Styles
import styles from './Wrapper.scss';

interface Classes extends ExtendedClasses {
  container?: string;
}

interface PropTypes {
  classes?: Classes;
  className?: string;
  component?: any;
}

const LandingWrapper: React.FC<PropTypes> = ({
  children,
  classes = {},
  className,
  component: Component = 'section'
}) => (
  <Component className={classNames(className, classes.root, styles.Root)}>
    <div className={classNames(classes.container, styles.Container)}>
      {children}
    </div>
  </Component>
);

export default LandingWrapper;