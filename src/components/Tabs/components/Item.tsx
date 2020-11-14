import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Item.scss';

const TabsItem: React.FC<Tabs.TabProps> = ({
  classes,
  label,
  onClick,
  selected,
  value
}) => {
  const { rootClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(classes?.root, styles.Root, {
        [styles.RootIsSelected]: selected
      })
    }),
    [classes, selected]
  );

  return (
    <div
      className={rootClassName}
      data-tab-id={value}
      onClick={onClick}
      role="tab"
      tabIndex={0}
    >
      {label}

      <div className={styles.Line} />
    </div>
  );
};

export default TabsItem;
