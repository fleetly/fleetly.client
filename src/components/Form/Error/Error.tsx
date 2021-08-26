import React from 'react';
import { useForm } from 'react-final-form';

// Components
import Badge from '@components/Badge';

// Styles
import styles from './Error.scss';

export const Error: React.FC = () => {
  // Setup
  const { getState } = useForm();
  const { submitError } = getState();

  return submitError ? (
    <Badge
      className={styles.Root}
      color="red"
      description={submitError}
      icon="far fa-exclamation-circle"
      title="Error!"
    />
  ) : null;
};
