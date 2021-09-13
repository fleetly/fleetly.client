import classNames from 'classnames';
import React from 'react';
import { useForm } from 'react-final-form';

// Components
import Badge from '@components/Badge';

// Styles
import styles from './Error.scss';

export interface ErrorProps {
  className?: string;
}

export const Error: React.FC<ErrorProps> = ({ className }) => {
  // Setup
  const { getState } = useForm();
  const { submitError } = getState();

  return submitError ? (
    <Badge
      className={classNames(className, styles.Root)}
      color="red"
      description={submitError}
      icon="far fa-exclamation-circle"
      title="Error!"
    />
  ) : null;
};
