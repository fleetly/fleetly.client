import React from 'react';

// Components
import { Field } from '@components/Form';

// Styles
import styles from './Manual.scss';

export const ChannelsAddManual: React.FC = () => (
  <div className={styles.Root}>
    <Field name="token" placeholder="Token" />
  </div>
);
