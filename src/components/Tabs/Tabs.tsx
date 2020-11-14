import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Tabs.scss';

const Tabs: React.FC<Tabs.Props> = ({ children, classes, onSelect, value }) => {
  const { rootClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(classes?.root, styles.Root)
    }),
    [classes]
  );

  const handleTabClick = React.useCallback(
    (event: React.SyntheticEvent<HTMLDivElement>) => {
      onSelect && onSelect(event.currentTarget.dataset.tabId);
    },
    [onSelect]
  );

  return (
    <div
      className={rootClassName}
      role="tablist"
      style={{
        gridTemplateColumns: `repeat(${React.Children.count(children)}, 1fr)`
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
