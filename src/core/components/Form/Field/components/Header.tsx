import classNames from 'classnames';
import React from 'react';

// Components
import { Text } from '@components/Typography';

// Styles
import styles from './Header.scss';

export interface FieldHeaderClasses extends ExtendedClasses {
  hint?: string;
  title?: string;
}

export interface FieldHeaderProps {
  classes?: FieldHeaderClasses;
  className?: string;
  hint?: React.ReactNode;
  label: React.ReactNode;
}

export const FieldHeader: React.FC<any> = ({
  classes,
  className,
  hint,
  label
}) => (
  <div className={classNames(classes?.root, className, styles.Root)}>
    <Text
      className={classNames(classes?.title, styles.Title)}
      weight="semiBold"
    >
      {label}
    </Text>

    {hint && (
      <Text className={classNames(classes?.hint, styles.Hint)} size="small">
        {hint}
      </Text>
    )}
  </div>
);
