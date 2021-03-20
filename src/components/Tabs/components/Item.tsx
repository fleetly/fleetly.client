import classNames from 'classnames';
import React from 'react';

// Styles
import styles from './Item.scss';

interface PropTypes {
  classes?: ExtendedClasses;
  label: string;
  onClick?(event: React.SyntheticEvent<HTMLDivElement>): void;
  selected?: boolean;
  value: any;
}

const TabsItem: React.FC<PropTypes> = ({
  classes,
  label,
  onClick,
  selected,
  value
}) => (
  <div
    className={classNames(classes?.root, styles.Root, {
      [styles.RootIsSelected]: selected
    })}
    data-tab-id={value}
    onClick={onClick}
    role="tab"
    tabIndex={0}
  >
    {label}
    <div className={styles.Line} />
  </div>
);

export default TabsItem;
