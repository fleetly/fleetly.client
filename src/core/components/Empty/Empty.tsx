import classNames from 'classnames';
import * as React from 'react';

// Components
import { H4, P } from '@components/Typography';

// Styles
import styles from './Empty.scss';

interface PropTypes {
  description?: string;
  icon: string;
  title: string;
}

const Empty: React.FC<PropTypes> = ({ description, icon, title }) => (
  <div className={styles.Root}>
    <i className={classNames(styles.Icon, icon)} />
    <H4 className={styles.Title}>{title}</H4>
    {description && <P className={styles.Description}>{description}</P>}
  </div>
);

export default Empty;
