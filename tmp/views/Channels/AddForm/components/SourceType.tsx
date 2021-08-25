import classNames from 'classnames';
import * as React from 'react';
import { WrappedFieldInputProps } from 'redux-form';

// Components
import { withReduxForm } from '@components/Form';
import { Caption } from '@components/Typography';

// Styles
import styles from './SourceType.scss';

const SOURCE_LIST = [
  {
    id: 'FB',
    icon: 'fab fa-facebook-f',
    isDisabled: true,
    title: 'Facebook'
  },
  {
    id: 'TELEGRAM',
    icon: 'fab fa-telegram-plane',
    title: 'Telegram'
  },
  {
    id: 'VK',
    icon: 'fab fa-vk',
    title: 'VK'
  },
  {
    id: 'INSTAGRAM',
    icon: 'fab fa-instagram',
    isDisabled: true,
    title: 'Instagram'
  },
  {
    id: 'WHATSAPP',
    icon: 'fab fa-whatsapp',
    isDisabled: true,
    title: 'Whatsapp'
  },
  {
    id: 'TWITCH',
    icon: 'fab fa-twitch',
    isDisabled: true,
    title: 'Twitch'
  },
  {
    id: 'DISCORD',
    icon: 'fab fa-discord',
    isDisabled: true,
    title: 'Discord'
  }
];

const SourceType: React.FC<Form.FieldBase & WrappedFieldInputProps> = ({
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

export default withReduxForm<Form.FieldBase>()(SourceType);
