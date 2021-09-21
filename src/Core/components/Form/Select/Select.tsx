import classNames from 'classnames';
import { chain } from 'lodash';
import React, { useCallback, useMemo } from 'react';
import ReactSelect from 'react-select';
import { useField } from 'react-final-form';

import { FieldError, FieldHeader } from '@components/Form';

import {
  DropdownIndicator,
  LoadingIndicator,
  Menu,
  NoOptionsMessage,
  SelectContainer
} from './components';
import Option from './components/Option';
import Value from './components/Value';

// Styles
import styles from './Select.scss';

// Utils
import { getClassName } from '@utils/styles';

export const Select: React.FC<Form.SelectProps> = ({
  className,
  classes,
  disabled,
  hint,
  id,
  label,
  loaded,
  multiplied,
  name,
  options,
  placeholder,
  variant = 'outlined'
}) => {
  // Setup
  const {
    input: { onChange, value },
    meta: { error, touched }
  } = useField(name);

  // @todo - fixed value type
  // Setup
  const displayedValue: any = useMemo(() => {
    const collection = chain(
      (options as any).reduce(
        (accum = [], item: any) => accum.concat(item.options || item),
        []
      )
    );

    return value
      ? multiplied
        ? collection.keyBy('value').at(value).value()
        : collection.filter({ value }).value()[0]
      : '';
  }, [multiplied, options, value]);

  const isFilled = useMemo(() => variant === 'filled', [variant]);

  // Handlers
  const handleChange = useCallback(
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
    <div
      className={classNames(
        className,
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
      )}
    >
      {label && <FieldHeader classes={classes} hint={hint} label={label} />}

      <ReactSelect
        classes={classes}
        className={styles.Container}
        classNamePrefix="react-select"
        components={{
          DropdownIndicator,
          LoadingIndicator,
          Option,
          Menu,
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

      {touched && <FieldError>{error}</FieldError>}
    </div>
  );
};
