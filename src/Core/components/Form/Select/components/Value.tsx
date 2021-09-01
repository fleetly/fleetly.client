import classNames from 'classnames';
import * as React from 'react';
import { MultiValueProps, SingleValueProps } from 'react-select';

// Components
import Avatar from '@components/Avatar';

// Styles
import styles from './Value.scss';

// Utils
import { getClassName } from '@utils/styles';

const FormSelectValue: React.FC<
  | MultiValueProps<Form.SelectOptionType>
  | SingleValueProps<Form.SelectOptionType>
> = ({ data: { avatar, color, label }, isMulti, selectProps, ...props }) => {
  const classes = selectProps.classes?.value;
  const { removeProps } = props as MultiValueProps<Form.SelectOptionType>;

  const {
    rootClassName,
    labelClassName,
    removeClassName,
    removeIconClassName
  } = React.useMemo(
    () => ({
      rootClassName: classNames(
        classes?.root,
        styles.Root,
        getClassName('color', {
          collection: styles,
          value: color || 'blue'
        }),
        {
          [styles.RootVariantFilled]: selectProps?.isFilled,
          [styles.RootVariantOutlined]:
            !selectProps?.isFilled && (!!avatar || !!color || isMulti)
        }
      ),
      labelClassName: classNames(classes?.label, styles.Label),
      removeClassName: classNames(classes?.remove, styles.Remove),
      removeIconClassName: classNames(
        classes?.removeIcon,
        styles.RemoveIcon,
        'fas fa-times'
      )
    }),
    [avatar, classes, color, isMulti, selectProps]
  );

  return (
    <div className={rootClassName}>
      {avatar && (
        <Avatar {...avatar} classes={{ root: styles.Avatar }} color={color} />
      )}

      <div className={labelClassName}>{label}</div>

      {isMulti && removeProps && (
        <div
          {...removeProps}
          className={removeClassName}
          role="button"
          tabIndex={0}
        >
          <i className={removeIconClassName} />
        </div>
      )}
    </div>
  );
};

export default FormSelectValue;
