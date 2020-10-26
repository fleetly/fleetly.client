import { Color } from '@fleetly/common/dist/enums';
import classNames from 'classnames';
import * as React from 'react';
import { IndicatorProps } from 'react-select';

// Components
import { H4, P } from '@components/Typography';

// Styles
import styles from './common.scss';

// Utils
import { getClassName } from '@utils/styles';

export const DropdownIndicator: React.FC<IndicatorProps<
  Form.SelectOptionType
>> = ({ getValue, innerProps, selectProps }) => {
  const [value]: any = getValue();

  const { rootClassName, iconClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(
        styles.Caret,
        getClassName('color', {
          collection: styles,
          prefix: 'Caret',
          value: value?.color || Color.BLUE
        }),
        {
          [styles.CaretVariantFilled]: selectProps?.isFilled,
          [styles.CaretVariantOutlined]: !selectProps?.isFilled
        }
      ),
      iconClassName: classNames(styles.CaretIcon, {
        'fas fa-angle-down': selectProps?.isFilled,
        'fas fa-caret-down': !selectProps?.isFilled
      })
    }),
    [selectProps, value]
  );

  return (
    <div className={rootClassName} {...innerProps}>
      {!selectProps?.isFilled && <div className={styles.CaretCircle} />}
      <i className={iconClassName} />
    </div>
  );
};

export const LoadingIndicator: React.FC<any> = ({ getValue, innerProps }) => {
  const [value]: any = getValue();

  const { rootClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(
        styles.Spinner,
        getClassName('color', {
          collection: styles,
          prefix: 'Spinner',
          value: value?.color
        }),
        'far fa-spinner-third'
      )
    }),
    [value]
  );

  return <i {...innerProps} className={rootClassName} />;
};

export const NoOptionsMessage: React.FC<{}> = () => (
  <div className={styles.Empty}>
    <i className={classNames(styles.EmptyIcon, 'fas fa-times')} />
    <H4 className={styles.EmptyTitle}>No Result</H4>
    <P className={styles.EmptyDescription}>
      Please try again with a different condition
    </P>
  </div>
);
