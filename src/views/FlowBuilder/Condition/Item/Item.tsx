import classNames from 'classnames';
import React, { useState } from 'react';

// Components
import { Text } from '@components/Typography';
import { useContextMenu } from '@components/ContextMenu';

// Containers
import Menu from './containers/Menu';

// Hooks
import { useOutsideClick } from '@hooks/events';

// Styles
import styles from './Item.scss';

const Item = () => {
  // Setup
  const [blockMenuProps, { handleMenuOpen }] = useContextMenu();

  // State
  const [state, setState] = useState(false);

  // Handlers
  const handleClickClosed = () => setState(false);

  // Setup
  const ref = useOutsideClick(state ? handleClickClosed : undefined);

  return (
    <div>
      <Menu {...blockMenuProps} />
      <div
        className={classNames(styles.Root, { [styles.RootIsAction]: state })}
        ref={ref}
        onClick={handleMenuOpen}
      >
        <Text medium>Gender</Text>
        <Text medium>Is</Text>
        <Text medium>Male</Text>
      </div>
    </div>
  );
};
export default Item;
