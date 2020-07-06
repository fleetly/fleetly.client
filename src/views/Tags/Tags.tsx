import * as React from 'react';

// Components
import Button from '@components/Button';
import Modal from '@components/Modal';
import { H3 } from '@components/Typography';

// Containers
import Form from './containers/Form';
import Table from './containers/Table';

// Data
import { TAGS_FORM, TAGS_MODAL } from './data';

// Hooks
import { useTags } from './Tags.hooks';

// Styles
import styles from './Tags.scss';

const Tags = () => {
  const { handleAddClick, handleFormSubmit } = useTags();

  return (
    <div className={styles.Root}>
      <div className={styles.Header}>
        <H3>Tags</H3>
        <Button color="primary" onClick={handleAddClick}>
          Add Tag
        </Button>
      </div>

      <div className={styles.Container}>
        <Table />
      </div>

      <Modal id={TAGS_MODAL} title="Create new tag">
        {({ id, initialValues }: any) => (
          <Form
            form={`${TAGS_FORM}-${id}`}
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
          />
        )}
      </Modal>
    </div>
  );
};

export default Tags;
