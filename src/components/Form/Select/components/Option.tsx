import { Color } from '@fleetly/common/dist/enums';
import classNames from 'classnames';
import * as React from 'react';
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

  const {
    rootClassName,
    controlClassName,
    descriptionClassName,
    iconClassName,
    infoClassName,
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
          [styles.RootVariantAvatar]: !!avatar,
          [styles.RootVariantDescription]: !!description
        }
      ),
      controlClassName: classNames(classes?.control, styles.Control),
      descriptionClassName: classNames(
        classes?.description,
        styles.Description
      ),
      infoClassName: classNames(classes?.info, styles.Info),
      iconClassName: classNames(classes?.icon, styles.Icon),
      labelClassName: classNames(classes?.label, styles.Label)
    }),
    [avatar, classes, color, description, isDisabled, isSelected]
  );

  return (
    <div className={rootClassName}>
      <div className={controlClassName} {...innerProps}>
        {avatar ? (
          <Avatar {...avatar} classes={{ root: styles.Avatar }} color={color} />
        ) : (
          <div className={iconClassName} />
        )}

        <div className={labelClassName}>
          {label}
          {description && (
            <Caption className={descriptionClassName} component="div">
              {description}
            </Caption>
          )}
        </div>
      </div>

      {info && <div className={infoClassName}>{info}</div>}
    </div>
  );
};

export default FormSelectOption;
