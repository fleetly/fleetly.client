import classNames from 'classnames';
import * as React from 'react';
import { IndicatorProps } from 'react-select';

// Components
import { FieldError, FieldHeader } from '../../common';
import { H4, P } from '@components/Typography';

// Styles
import styles from './common.scss';

export const DropdownIndicator: React.FC<IndicatorProps<
  Form.SelectOptionType
>> = ({ innerProps }) => (
  <div className={styles.Caret} {...innerProps}>
    <div className={styles.CaretCircle} />
    <i className={classNames(styles.CaretIcon, 'fas fa-caret-down')} />
  </div>
);

export const NoOptionsMessage: React.FC<{}> = () => (
  <div className={styles.Empty}>
    <i className={classNames(styles.EmptyIcon, 'fas fa-times')} />
    <H4 className={styles.EmptyTitle}>No Result</H4>
    <P className={styles.EmptyDescription}>
      Please try again with a different condition
    </P>
  </div>
);

export const SelectContainer = ({
  children,
  className,
  innerProps,
  selectProps
}: any) => {
  const { error, hint, inputId, label } = selectProps;

  return (
    <div className={className} {...innerProps}>
      <FieldHeader id={inputId} label={label} hint={hint} />
      {children}
      <FieldError error={error} />
    </div>
  );
};
