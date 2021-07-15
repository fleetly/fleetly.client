import classNames from 'classnames';
import React, { Children, useCallback } from 'react';

// Styles
import styles from './Tabs.scss';

interface Classes extends ExtendedClasses {
  tab?: string;
}

export interface TabsProps {
  children: React.ReactNode;
  classes?: Classes;
  className?: string;
  onSelect?(value: any): void;
  value: any;
}

const Tabs: React.FC<TabsProps> = ({
  children,
  className,
  classes,
  onSelect,
  value
}) => {
  const handleTabClick = useCallback(
    (event: React.SyntheticEvent<HTMLDivElement>) => {
      onSelect && onSelect(event.currentTarget.dataset.tabId);
    },
    [onSelect]
  );

  return (
    <div
      className={classNames(className, classes?.root, styles.Root)}
      role="tablist"
      style={{
        gridTemplateColumns: `repeat(${Children.count(children)}, 1fr)`
      }}
    >
      {React.Children.map<any, any>(children, (child) =>
        React.cloneElement(child, {
          classes: {
            root: classNames(child.props.classes?.root, classes?.tab)
          },
          onClick: handleTabClick,
          selected: child.props.value === value
        })
      )}
    </div>
  );
};

export default Tabs;
