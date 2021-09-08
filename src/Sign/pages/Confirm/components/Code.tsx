import React from 'react';
import Code from 'react-code-input';
import { useField } from 'react-final-form';

// Styles
import styles from './Code.scss';

export const SignConfirmCode: React.FC = () => {
  // Setup
  const { input } = useField('code');

  return (
    <Code
      {...input}
      className={styles.Root}
      fields={6}
      inputMode="numeric"
      name="code"
      type="number"
    />
  );
};
