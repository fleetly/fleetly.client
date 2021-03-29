import classNames from 'classnames';
import * as React from 'react';

// Components
import { H5 } from '@components/Typography';

// Styles
import styles from './Features.scss';

const Features = ({ icon, title }: any) => (
  <div className={styles.Root}>
    <i className={classNames(styles.Icon, icon)} />
    <H5 className={styles.Title}>{title}</H5>
  </div>
);

export default Features;
