import classNames from 'classnames';
import * as React from 'react';
import { WrappedFieldInputProps } from 'redux-form';

// Components
import { withReduxForm } from '@components/Form';
import { Caption } from '@components/Typography';

// Data
import { SOURCE_LIST } from '../data';

// Styles
import styles from './SourceType.scss';

const ChannelsSourceType: React.FC<Form.FieldBase & WrappedFieldInputProps> = ({
  onChange,
  value
}) => {
  const handleClick = React.useCallback(
    (event: React.SyntheticEvent<HTMLDivElement>) =>
      onChange(event.currentTarget.dataset.sourceType),
    [onChange]
  );

  return (
    <div className={styles.Root}>
      {SOURCE_LIST.map(({ id, icon, isDisabled, title }) => (
        <div
          className={classNames(styles.Source, {
            [styles.SourceIsDisabled]: isDisabled,
            [styles.SourceIsSelected]: id === value
          })}
          data-source-type={id}
          key={id}
          onClick={handleClick}
          role="button"
          tabIndex={0}
        >
          <i className={classNames(styles.Icon, icon)} />
          <Caption className={styles.Title}>{title}</Caption>
        </div>
      ))}
    </div>
  );
};

export default withReduxForm<Form.FieldBase>()(ChannelsSourceType);
