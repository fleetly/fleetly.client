import classNames from 'classnames';
import React from 'react';
import { OptionProps } from 'react-select';

// Components
import Avatar from '@components/Avatar';
import { Caption } from '@components/Typography';

// Styles
import styles from './Option.scss';

// Utils
import { getClassName } from '@utils/styles';

const FormSelectOption: React.FC<OptionProps<Form.SelectOptionType>> = ({
  data: { avatar, color, description, info },
  innerProps,
  isDisabled,
  isSelected,
  label,
  selectProps
}) => {
  const classes = selectProps.classes?.option;

  return (
    <div
      className={classNames(
        classes?.root,
        styles.Root,
        getClassName('color', {
          collection: styles,
          value: color || 'blue'
        }),
        {
          [styles.RootIsDisabled]: isDisabled,
          [styles.RootIsSelected]: isSelected
        },
        {
          [styles.RootVariantAvatar]: !!avatar,
          [styles.RootVariantDescription]: !!description
        }
      )}
    >
      <div
        className={classNames(classes?.control, styles.Control)}
        {...innerProps}
      >
        {avatar ? (
          <Avatar {...avatar} classes={{ root: styles.Avatar }} color={color} />
        ) : (
          <div className={classNames(classes?.icon, styles.Icon)} />
        )}

        <div className={classNames(classes?.label, styles.Label)}>
          {label}
          {description && (
            <Caption
              className={classNames(classes?.description, styles.Description)}
              component="div"
            >
              {description}
            </Caption>
          )}
        </div>
      </div>

      {info && (
        <div className={classNames(classes?.info, styles.Info)}>{info}</div>
      )}
    </div>
  );
};

export default FormSelectOption;
