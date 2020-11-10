import * as React from 'react';

// Components
import Tag from '../../components/Tag';

// Containers
import Form from '../AddTagForm';

// Hooks
import { useSubscriberTags } from './Tags.hooks';

// Styles
import styles from './Tags.scss';

const SubscriberTags: React.FC<Subscriber.TagsProps> = ({ tags, value }) => {
  const {
    displayedTags,
    handleFormSubmit,
    handleRemoveClick,
    options
  } = useSubscriberTags(tags, value);

  return (
    <div className={styles.Root}>
      <Form options={options} onSubmit={handleFormSubmit} />

      <div className={styles.List}>
        {displayedTags.map(
          (tag) =>
            tag && <Tag key={tag.id} {...tag} onRemove={handleRemoveClick} />
        )}
      </div>
    </div>
  );
};

export default SubscriberTags;
