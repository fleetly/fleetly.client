import { Color } from '@fleetly/common/dist/enums';
import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Cell.scss';

// Utils
import { getClassName } from '@utils/styles';

type PropTypes = {
  color: Color;
};

const TagsColorCell: React.FC<PropTypes> = ({ color }) => (
  <div
    className={classNames(
      styles.Root,
      getClassName('color', { collection: styles, value: color })
    )}
  />
);

export default TagsColorCell;
