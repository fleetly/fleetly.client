import classNames from 'classnames';
import React, { useState } from 'react';

// Components
import { Text } from '@components/Typography';
import { useContextMenu } from '@components/ContextMenu';

// Hooks
import { useOutsideClick } from '@hooks/events';

// Styles
import styles from './Item.scss';

// Test
import Test from './Menu'

const Item = () => {
  // State
  const [state, setState] = useState(false);

  const handleEditClick = () => setState(true);
  const handleClickClosed = () => setState(false);

  const [blockMenuProps, {handleMenuOpen}] = useContextMenu();

  const ref = useOutsideClick(state ? handleClickClosed : undefined);
  return (
    <div><Test {...blockMenuProps} /> 
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
