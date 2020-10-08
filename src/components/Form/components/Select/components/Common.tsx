import classNames from 'classnames';
import * as React from 'react';
import {
  ControlProps,
  IndicatorProps,
  MenuProps,
  ValueContainerProps
} from 'react-select';

// Components
import { H4, P } from '@components/Typography';

// Styles
import styles from './Common.scss';

export const ControlComponent: React.FC<ControlProps<
  Form.SelectOptionType
>> = ({ children, innerProps, isFocused }) => (
  <div
    {...innerProps}
    className={classNames(styles.Container, {
      [styles.ContainerIsFocused]: isFocused
    })}
  >
    {children}
  </div>
);

export const DropdownIndicator: React.FC<IndicatorProps<
  Form.SelectOptionType
>> = (props) => (
  <div className={styles.Caret} {...props}>
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

export const Menu: React.FC<MenuProps<Form.SelectOptionType>> = ({
  children,
  innerProps
}) => (
  <div {...innerProps} className={styles.Menu}>
    {children}
  </div>
);

export const SelectContainer = ({ children, innerProps, selectProps }: any) => {
  const { error, hint, id, label } = selectProps;

  return (
    <div className={styles.Root} {...innerProps}>
      {(label || hint) && (
        <div className={styles.Header}>
          <label className={styles.Label} htmlFor={id}>
            {label}
          </label>

          <div className={styles.Hint}>{hint}</div>
        </div>
      )}

      {children}

      {error && <div className={styles.Error}>{error}</div>}
    </div>
  );
};

export const ValueContainer: React.FC<ValueContainerProps<
  Form.SelectOptionType
>> = ({ children, hasValue }) => (
  <div
    className={classNames(styles.ValueContainer, {
      [styles.ValueContainerIsEmpty]: !hasValue
    })}
  >
    {children}
  </div>
);
