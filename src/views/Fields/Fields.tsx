import * as React from 'react';

// Components
import Button from '@components/Button';
import Modal from '@components/Modal';
import Page, { Wrapper } from '@components/Page';

// Containers
import Form from './containers/Form';
import Table from './containers/Table';

// Data
import { FIELDS_FORM, FIELDS_MODAL } from './data';

// Hooks
import { useFields } from './Fields.hooks';

const Fields = () => {
  const {
    handleAddClick,
    handleDeleteClick,
    handleEditClick,
    handleFormSubmit,
    fields
  } = useFields();

  return (
    <Page title="Fields">
      <Wrapper
        actions={
          <Button color="primary" onClick={handleAddClick}>
            Create Field
          </Button>
        }
        title="Fields"
      >
        <Table
          data={fields}
          onDelete={handleDeleteClick}
          onEdit={handleEditClick}
        />

        <Modal id={FIELDS_MODAL} title="Create new field">
          {({ id, initialValues }: any) => (
            <Form
              form={`${FIELDS_FORM}-${id}`}
              initialValues={{ ...initialValues, type: 'TEXT' }}
              onSubmit={handleFormSubmit}
            />
          )}
        </Modal>
      </Wrapper>
    </Page>
  );
};

export default Fields;
