import * as React from 'react';

// Components
import Button from '@components/Button';
import Modal from '@components/Modal';
import Page, { Wrapper } from '@components/Page';

// Containers
import Form from './containers/Form';
import Table from './containers/Table';

// Data
import { TAGS_FORM, TAGS_MODAL } from './data';

// Hooks
import { useTags } from './Tags.hooks';

const Tags = () => {
  const { handleAddClick, handleFormSubmit } = useTags();

  return (
    <Page title="Tags">
      <Wrapper
        actions={
          <Button color="primary" onClick={handleAddClick}>
            Add Tag
          </Button>
        }
        title="Tags"
      >
        <Table />

        <Modal id={TAGS_MODAL} title="Create new tag">
          {({ id, initialValues }: any) => (
            <Form
              form={`${TAGS_FORM}-${id}`}
              initialValues={initialValues}
              onSubmit={handleFormSubmit}
            />
          )}
        </Modal>
      </Wrapper>
    </Page>
  );
};

export default Tags;
