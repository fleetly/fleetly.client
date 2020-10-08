import classNames from 'classnames';
import * as React from 'react';
import Select, { components } from 'react-select';

// Components
import Option from './components/Option';

// HOCs
import withReduxForm from '../../hocs/withReduxForm';

// Styles
import styles from './Select.scss';

const ControlComponent = ({
  children,
  innerProps,
  isFocused,
  selectProps
}: any) => {
  const { classes } = selectProps;

  return (
    <div
      {...innerProps}
      className={classNames(classes?.container, styles.Container, {
        [styles.ContainerIsFocused]: isFocused
      })}
    >
      {children}
    </div>
  );
};

const DropdownIndicator = (props: any) => (
  <div className={styles.Caret} {...props}>
    <div className={styles.CaretCircle} />
    <i className={classNames(styles.CaretIcon, 'fas fa-caret-down')} />
  </div>
);

const Menu = ({ children, innerProps }: any) => (
  <div {...innerProps} className={styles.Menu}>
    {children}
  </div>
);

const SelectContainer = ({ children, innerProps, ...props }: any) => {
  const { classes, error, hint, id, label } = props.selectProps;

  return (
    <div className={styles.Root} {...innerProps}>
      {(label || hint) && (
        <div className={classNames(classes?.header, styles.Header)}>
          <label
            className={classNames(classes?.label, styles.Label)}
            htmlFor={id}
          >
            {label}
          </label>

          <div className={classNames(classes?.hint, styles.Hint)}>{hint}</div>
        </div>
      )}

      {children}

      {error && (
        <div className={classNames(classes?.error, styles.Error)}>{error}</div>
      )}
    </div>
  );
};

const SingleValue = ({ children, ...props }: any) => (
  <components.SingleValue {...props} className={styles.ValueSingle}>
    {children}
  </components.SingleValue>
);

const ValueContainer = ({ children, innerProps }: any) => (
  <div {...innerProps} className={styles.ValueContainer}>
    {children}
  </div>
);

const FormSelect = ({ label, name, onChange, options, value }: any) => {
  const displayedValue = React.useMemo(
    () =>
      Array.isArray(value)
        ? value.map((value: any) =>
            options.find((option: any) => option.value === value)
          )
        : options.find((option: any) => option.value === value),
    [options, value]
  );

  return (
    <Select
      components={{
        Control: ControlComponent,
        DropdownIndicator,
        IndicatorSeparator: null,
        Menu,
        Option,
        SelectContainer,
        SingleValue,
        ValueContainer
      }}
      label={label}
      name={name}
      onChange={onChange}
      options={options}
      value={displayedValue}
    />
  );
};

export default withReduxForm<Form.FieldBase>({
  parse: ({ value }: any) => value
})(FormSelect);
