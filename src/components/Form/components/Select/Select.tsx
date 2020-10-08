import * as React from 'react';
import Select from 'react-select';

// Components
import {
  ControlComponent,
  DropdownIndicator,
  Menu,
  NoOptionsMessage,
  SelectContainer,
  ValueContainer
} from './components';

import Option from './components/Option';
import SingleValue from './components/Value';

// HOCs
import withReduxForm from '../../hocs/withReduxForm';

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
        MultiValue: SingleValue,
        NoOptionsMessage,
        Option,
        SelectContainer,
        SingleValue,
        ValueContainer
      }}
      isMulti={true}
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
