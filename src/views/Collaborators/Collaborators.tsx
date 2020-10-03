import * as React from 'react';

// Components
import Button from '@components/Button';
import Modal from '@components/Modal';
import Page, { Wrapper } from '@components/Page';

// Containers
import Form from './containers/Form';
import Table from './containers/Table';

// Constants
import { ADD_COLLABORATOR_FORM, ADD_COLLABORATOR_MODAL } from '@constants';

// Hook
import { useCollaborators } from './Collaborators.hooks';

const Collaborators = () => {
  const {
    handleAddClick,
    handleRemoveClick,
    handleFormSubmit,
    collaborators
  } = useCollaborators();

  return (
    <Page title="Collaborators">
      <Wrapper
        actions={
          <Button color="primary" onClick={handleAddClick}>
            Add Collaborator
          </Button>
        }
        title="Collaborators"
      >
        <Table data={collaborators} onDelete={handleRemoveClick} />

        <Modal id={ADD_COLLABORATOR_MODAL} title="Create new field">
          {({ id, initialValues }: any) => (
            <Form
              form={`${ADD_COLLABORATOR_FORM}${id ? `-${id}` : ''}`}
              initialValues={{ ...initialValues, type: 'TEXT' }}
              onSubmit={handleFormSubmit}
            />
          )}
        </Modal>
      </Wrapper>
    </Page>
  );
};

export default Collaborators;
