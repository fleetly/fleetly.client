import * as React from 'react';
import Select from 'react-select';

// Components
import {
  DropdownIndicator,
  NoOptionsMessage,
  SelectContainer
} from './components';

import Option from './components/Option';
import Value from './components/Value';

// HOCs
import withReduxForm from '../../hocs/withReduxForm';

// Styles
import styles from './Select.scss';

const FormSelect: React.FC<Form.SelectProps> = ({
  hint,
  id,
  isMulti,
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
      className={styles.Root}
      classNamePrefix="react-select"
      components={{
        DropdownIndicator,
        Option,
        MultiValue: Value,
        NoOptionsMessage,
        SelectContainer,
        SingleValue: Value
      }}
      hint={hint}
      inputId={id}
      isMulti={isMulti}
      label={label}
      name={name}
      onChange={onChange}
      options={options}
      value={displayedValue}
    />
  );
};

export default withReduxForm<Form.SelectProps>({
  parse: (value: Form.SelectOptionType | Form.SelectOptionType[]) =>
    value
      ? Array.isArray(value)
        ? value.map(({ value }) => value)
        : value.value
      : ''
})(FormSelect);
