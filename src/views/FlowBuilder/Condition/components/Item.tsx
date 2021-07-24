import classNames from 'classnames';
import React, { useState } from 'react';

// Components
import { Text } from '@components/Typography';

// Hooks
import { useOutsideClick } from '@hooks/events';

// Styles
import styles from './Item.scss';

const Item = () => {
  // State
  const [state, setState] = useState(false);

  const handleEditClick = () => setState(true);
  const handleClickClosed = () => setState(false);

  const ref = useOutsideClick<HTMLDivElement>(
    state ? handleClickClosed : undefined
  );

  return (
    <div
      className={classNames(styles.Root, { [styles.RootIsAction]: state })}
      ref={ref}
      onClick={handleEditClick}
    >
      <Text medium>Gender</Text>
      <Text medium>Is</Text>
      <Text medium>Male</Text>
    </div>
  );
};
export default Item;
