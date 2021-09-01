import classNames from 'classnames';
import * as React from 'react';
import { components, IndicatorProps } from 'react-select';

// Components
import Transition from '@components/Transition';
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
          value: value?.color || 'blue'
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

export const SelectContainer: React.FC<any> = (props) => (
  <components.SelectContainer {...props}>
    {props.children[0]}
    {props.children[1]}

    <Transition duration={200} enter="zoomIn" in={!!props.children[2]}>
      <div className={styles.Container}>{props.children[2]}</div>
    </Transition>

    {props.children[3]}
  </components.SelectContainer>
);
