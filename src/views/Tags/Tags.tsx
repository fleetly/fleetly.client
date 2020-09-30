import * as React from 'react';

// Components
import Button from '@components/Button';
import Modal from '@components/Modal';
import Page, { Wrapper } from '@components/Page';

// Constants
import { CREATE_TAG_FORM, CREATE_TAG_MODAL } from '@constants';

// Containers
import Form from './containers/Form';
import Table from './containers/Table';

// Hooks
import { useTags } from './Tags.hooks';

const Tags = () => {
  const {
    handleCreateClick,
    handleDeleteClick,
    handleEditClick,
    handleFormSubmit,
    tags
  } = useTags();

  return (
    <Page title="Tags">
      <Wrapper
        actions={
          <Button color="primary" onClick={handleCreateClick}>
            Create Tag
          </Button>
        }
        title={`Tags (${tags.length})`}
      >
        <Table
          data={tags}
          onDelete={handleDeleteClick}
          onEdit={handleEditClick}
        />

        <Modal id={CREATE_TAG_MODAL} title="Create new tag">
          {({ id, initialValues }: any) => (
            <Form
              form={`${CREATE_TAG_FORM}${id ? `-${id}` : ''}`}
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
