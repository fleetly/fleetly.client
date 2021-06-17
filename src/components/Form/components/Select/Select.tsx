import classNames from 'classnames';
import { chain } from 'lodash';
import * as React from 'react';
import Select from 'react-select';
import { WrappedFieldInputProps } from 'redux-form';

import {
  DropdownIndicator,
  LoadingIndicator,
  NoOptionsMessage,
  SelectContainer
} from './components';
import { FieldError, FieldHeader } from '../common';

import Option from './components/Option';
import Value from './components/Value';

// HOCs
import withReduxForm from '../../hocs/withReduxForm';

// Styles
import styles from './Select.scss';

// Utils
import { getClassName } from '@utils/styles';

const FormSelect: React.FC<Form.SelectProps & WrappedFieldInputProps> = ({
  classes,
  disabled,
  error,
  hint,
  id,
  label,
  loaded,
  multiplied,
  name,
  onChange,
  options,
  placeholder,
  value,
  variant = 'outlined'
}) => {
  // @todo - fixed value type
  // Setup
  const displayedValue: any = React.useMemo(() => {
    const collection = chain(options).map('options').flatten();

    return value
      ? multiplied
        ? collection.keyBy('value').at(value).value()
        : collection.filter({ value }).value()[0]
      : '';
  }, [multiplied, options, value]);

  const isFilled = React.useMemo(() => variant === 'filled', [variant]);

  // Classnames
  const { rootClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(
        classes?.root,
        styles.Root,
        isFilled &&
          getClassName('color', {
            collection: styles,
            value: displayedValue?.color
          }),
        {
          [styles.RootIsDisabled]: disabled,
          [styles.RootIsLoaded]: loaded
        },
        {
          [styles.RootVariantFilled]: isFilled,
          [styles.RootVariantOutlined]: !isFilled
        }
      )
    }),
    [classes, disabled, displayedValue, loaded, isFilled]
  );

  // Handlers
  const handleChange = React.useCallback(
    (value) =>
      onChange(
        value
          ? Array.isArray(value)
            ? value.map(({ value }) => value)
            : value.value
          : ''
      ),
    [onChange]
  );

  return (
    <div className={rootClassName}>
      <FieldHeader classes={classes} hint={hint} id={id} label={label} />

      <Select
        className={styles.Container}
        classNamePrefix="react-select"
        components={{
          DropdownIndicator,
          LoadingIndicator,
          Option,
          MultiValue: Value,
          NoOptionsMessage,
          SelectContainer,
          SingleValue: Value
        }}
        inputId={id}
        isLoading={loaded}
        isFilled={isFilled}
        isMulti={multiplied}
        isSearchable={!isFilled}
        name={name}
        onChange={handleChange}
        options={options}
        placeholder={placeholder}
        value={displayedValue}
      />

      <FieldError classes={classes} error={error} />
    </div>
  );
};

export default withReduxForm<Form.SelectProps>()(FormSelect);
