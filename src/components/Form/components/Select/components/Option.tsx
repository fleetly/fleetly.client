import { Color } from '@fleetly/common/dist/enums';
import classNames from 'classnames';
import * as React from 'react';
import { OptionProps } from 'react-select';

// Styles
import styles from './Option.scss';

// Utils
import { getClassName } from '@utils/styles';

const FormSelectOption: React.FC<OptionProps<any>> = ({
  data: { color = Color.BLUE, description },
  innerProps,
  isDisabled,
  isSelected,
  label,
  selectProps: { classes }
}) => {
  const {
    rootClassName,
    controlClassName,
    descriptionClassName,
    iconClassName,
    labelClassName
  }: any = React.useMemo(
    () => ({
      rootClassName: classNames(
        classes?.root,
        styles.Root,
        getClassName('color', { collection: styles, value: color }),
        {
          [styles.RootIsDisabled]: isDisabled,
          [styles.RootIsSelected]: isSelected
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
    [classes, color, isDisabled, isSelected]
  );

  return (
    <div className={rootClassName} {...innerProps}>
      <div className={controlClassName} {...innerProps}>
        <div className={iconClassName} />
        <div className={labelClassName}>{label}</div>
      </div>

      {description && <div className={descriptionClassName}>{description}</div>}
    </div>
  );
};

export default FormSelectOption;
