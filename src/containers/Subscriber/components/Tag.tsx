import classNames from 'classnames';
import * as React from 'react';

// Components
import { Caption } from '@components/Typography';

// Styles
import styles from './Tag.scss';

// Utils
import { getClassName } from '@utils/styles';

const SubscriberTag: React.FC<Subscriber.TagProps> = ({
  id,
  color,
  onRemove,
  title
}) => {
  const { rootClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(
        styles.Root,
        getClassName('color', { collection: styles, value: color })
      )
    }),
    [color]
  );

  return (
    <div className={rootClassName}>
      <Caption className={styles.Label} component="div">
        {title}
      </Caption>

      <button
        data-tag-id={id}
        className={styles.Remove}
        onClick={onRemove}
        type="button"
      >
        <i className="far fa-times" />
      </button>
    </div>
  );
};

export default SubscriberTag;
