import classNames from 'classnames';
import React from 'react';

// Components
import { Text } from '@components/Typography';

// Hooks
import { useResponsive } from '@hooks/responsive';

// Styles
import styles from './Item.scss';

interface LandingHeaderMenuItemProps {
  children?: React.ReactNode;
  id: string;
  onClick(event: React.SyntheticEvent<HTMLDivElement>): void;
  selected?: boolean;
  title: string;
}

const LandingHeaderMenuItem: React.FC<any> = ({
  children,
  id,
  onClick,
  selected,
  title
}) => {
  // Setup
  const { isDesktop } = useResponsive();

  return (
    <div
      className={classNames(styles.Root, {
        [styles.RootIsSelected]: selected
      })}
      data-item-index={id}
      onClick={onClick}
      role="menuitem"
    >
      <div className={styles.Control}>
        <Text bold className={styles.Title} component="div" size="large">
          {title}
        </Text>
      </div>

      {isDesktop && <div className={styles.Dropdown}>{children}</div>}
    </div>
  );
};

export default LandingHeaderMenuItem;
