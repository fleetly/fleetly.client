import classNames from 'classnames';
import * as React from 'react';
import Select, {
  components,
  ControlProps,
  IndicatorProps,
  MenuProps,
  SingleValueProps,
  ValueContainerProps
} from 'react-select';

// Components
import Option from './components/Option';

// HOCs
import withReduxForm from '../../hocs/withReduxForm';

// Styles
import styles from './Select.scss';

const ControlComponent: React.FC<ControlProps<Form.SelectOptionType>> = ({
  children,
  innerProps,
  isFocused,
  selectProps
}) => {
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

const DropdownIndicator: React.FC<IndicatorProps<Form.SelectOptionType>> = (
  props
) => (
  <div className={styles.Caret} {...props}>
    <div className={styles.CaretCircle} />
    <i className={classNames(styles.CaretIcon, 'fas fa-caret-down')} />
  </div>
);

const Menu: React.FC<MenuProps<Form.SelectOptionType>> = ({
  children,
  innerProps
}) => (
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

const SingleValue: React.FC<SingleValueProps<Form.SelectOptionType>> = ({
  children,
  ...props
}) => (
  <components.SingleValue {...props} className={styles.ValueSingle}>
    {children}
  </components.SingleValue>
);

const ValueContainer: React.FC<ValueContainerProps<Form.SelectOptionType>> = ({
  children
}) => <div className={styles.ValueContainer}>{children}</div>;

const FormSelect: React.FC<Form.SelectProps> = ({
  label,
  name,
  onChange,
  options,
  value
}) => {
  // @todo - fixed value type
  const displayedValue: any = React.useMemo(
    () =>
      Array.isArray(value)
        ? value.map((value) => options.find((option) => option.value === value))
        : options.find((option) => option.value === value),
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

export default withReduxForm<Form.SelectProps>({
  parse: ({ value }: Form.SelectOptionType) => value
})(FormSelect);
