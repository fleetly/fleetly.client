import React from 'react';
import { Form, FormSpy } from 'react-final-form';

// Components
import { Select } from '@components/Form';
import { SubscriberTagsItem } from './components/Item';

// Hooks
import { useSubscriberTags } from './Tags.hooks';

// Interfaces
import { ITag } from '@interfaces/tag.interface';

// Styles
import styles from './Tags.scss';

export interface SubscriberTagsProps {
  tags: ITag[];
  values: string[];
}

export const SubscriberTags: React.FC<SubscriberTagsProps> = (props) => {
  // Setup
  const {
    $form,
    displayedTags,
    handleFormChange,
    handleFormSubmit,
    handleItemRemove,
    options
  } = useSubscriberTags(props);

  return (
    <div className={styles.Root}>
      <Form onSubmit={handleFormSubmit}>
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} ref={$form}>
            <FormSpy
              onChange={handleFormChange}
              subscription={{ values: true }}
            />

            <Select
              loaded={submitting}
              name="tagId"
              options={options}
              placeholder="Search tag"
            />
          </form>
        )}
      </Form>

      <div className={styles.List}>
        {displayedTags.map(
          (tag) =>
            tag && (
              <SubscriberTagsItem
                key={tag.id}
                {...tag}
                onRemove={handleItemRemove}
              />
            )
        )}
      </div>
    </div>
  );
};
