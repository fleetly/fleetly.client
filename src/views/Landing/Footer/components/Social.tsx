import classNames from 'classnames';
import React from 'react';

// Components
import Link from '@components/Link';

// Styles
import styles from './Social.scss';

interface PropTypes {
  icon: string;
  to: string;
}

const LandingFooterSocial: React.FC<PropTypes> = ({ icon, to }) => (
  <Link className={styles.Root} to={to}>
    <i className={classNames(styles.Icon, icon)} />
  </Link>
);

export default LandingFooterSocial;
