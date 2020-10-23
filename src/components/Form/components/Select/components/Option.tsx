import { Color } from '@fleetly/common/dist/enums';
import classNames from 'classnames';
import * as React from 'react';
import { OptionProps } from 'react-select';

// Components
import Avatar from '@components/Avatar';

// Styles
import styles from './Option.scss';

// Utils
import { getClassName } from '@utils/styles';

const FormSelectOption: React.FC<OptionProps<Form.SelectOptionType>> = ({
  data: { avatar, color, description },
  innerProps,
  isDisabled,
  isSelected,
  label,
  selectProps
}) => {
  const classes = selectProps.classes?.option;

  const {
    rootClassName,
    controlClassName,
    descriptionClassName,
    iconClassName,
    labelClassName
  } = React.useMemo(
    () => ({
      rootClassName: classNames(
        classes?.root,
        styles.Root,
        getClassName('color', {
          collection: styles,
          value: color || Color.BLUE
        }),
        {
          [styles.RootIsDisabled]: isDisabled,
          [styles.RootIsSelected]: isSelected
        },
        {
          [styles.RootVariantAvatar]: !!avatar
        }
      ),
      controlClassName: classNames(classes?.control, styles.Control),
      descriptionClassName: classNames(
        classes?.description,
        styles.Description
      ),
      iconClassName: classNames(classes?.icon, styles.Icon),
      labelClassName: classNames(classes?.label, styles.Label)
    }),
    [avatar, classes, color, isDisabled, isSelected]
  );

  return (
    <div className={rootClassName}>
      <div className={controlClassName} {...innerProps}>
        {avatar ? (
          <Avatar {...avatar} classes={{ root: styles.Avatar }} />
        ) : (
          <div className={iconClassName} />
        )}

        <div className={labelClassName}>{label}</div>
      </div>

      {description && <div className={descriptionClassName}>{description}</div>}
    </div>
  );
};

export default FormSelectOption;
