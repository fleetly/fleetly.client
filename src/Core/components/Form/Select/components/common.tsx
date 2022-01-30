import classNames from 'classnames';
import React, { useRef } from 'react';
import { components, IndicatorProps } from 'react-select';

// Components
import { ContextMenu } from '@components/ContextMenu';
import { H4, P } from '@components/Typography';

// Styles
import styles from './common.scss';

// Utils
import { getClassName } from '@utils/styles';

export const DropdownIndicator: React.FC<IndicatorProps<
  Form.SelectOptionType
>> = ({ getValue, innerProps, selectProps }) => {
  const [value]: any = getValue();

  return (
    <div
      className={classNames(
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
      )}
      {...innerProps}
    >
      {!selectProps?.isFilled && <div className={styles.CaretCircle} />}
      <i
        className={classNames(styles.CaretIcon, {
          'fas fa-angle-down': selectProps?.isFilled,
          'fas fa-caret-down': !selectProps?.isFilled
        })}
      />
    </div>
  );
};

export const LoadingIndicator: React.FC<any> = ({ getValue, innerProps }) => {
  const [value]: any = getValue();

  return (
    <i
      {...innerProps}
      className={classNames(
        styles.Spinner,
        getClassName('color', {
          collection: styles,
          prefix: 'Spinner',
          value: value?.color
        }),
        'far fa-spinner-third'
      )}
    />
  );
};

export const Menu: React.FC<any> = (props) => (
  <div {...props.innerProps}>{props.children}</div>
);

export const NoOptionsMessage: React.FC<{}> = () => (
  <div className={styles.Empty}>
    <i className={classNames(styles.EmptyIcon, 'fas fa-times')} />
    <H4 className={styles.EmptyTitle}>No Result</H4>
    <P className={styles.EmptyDescription}>
      Please try again with a different condition
    </P>
  </div>
);

export const SelectContainer: React.FC<any> = (props) => {
  // Setup
  const $anchor = useRef<HTMLDivElement>(null);
  const classes = props.selectProps?.classes?.container || {};

  return (
    <components.SelectContainer {...props}>
      {props.children[0]}

      <div className={styles.Control} ref={$anchor}>
        {props.children[1]}
      </div>

      <ContextMenu
        anchor={$anchor.current as HTMLElement}
        classes={{ card: classNames(classes?.menu, styles.Card) }}
        opened={props.selectProps.menuIsOpen}
        placement="bottom"
        width={$anchor.current?.clientWidth}
      >
        {props.children[2]}
      </ContextMenu>

      {props.children[3]}
    </components.SelectContainer>
  );
};
