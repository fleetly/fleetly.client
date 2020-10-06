import classNames from 'classnames';
import * as React from 'react';
import Select from 'react-select';

// HOCs
import withReduxForm from '../../hocs/withReduxForm';

// Styles
import styles from './Select.scss';

export const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' }
];

const ControlComponent = ({ children, ...props }: any) => {
  const { classes } = props.selectProps;

  return (
    <div
      className={classNames(classes?.container, styles.Container)}
      {...props}
    >
      {children}
    </div>
  );
};

const DropdownIndicator = () => (
  <div className={styles.Caret}>
    <div className={styles.CaretCircle} />
    <i className={classNames(styles.CaretIcon, 'fas fa-caret-down')} />
  </div>
);

const SelectContainer = ({ children, ...props }: any) => {
  const { classes, error, hint, id, label } = props.selectProps;

  return (
    <div>
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

const FormSelect = ({ label, name }: any) => (
  <Select
    components={{
      Control: ControlComponent,
      DropdownIndicator,
      IndicatorSeparator: null,
      SelectContainer
    }}
    label={label}
    name={name}
    options={colourOptions}
  />
);

export default withReduxForm()(FormSelect);
