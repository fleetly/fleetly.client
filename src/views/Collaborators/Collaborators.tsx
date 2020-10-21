import * as React from 'react';

// Components
import Button from '@components/Button';
import Modal from '@components/Modal';
import Page, { Wrapper } from '@components/Page';
import { P } from '@components/Typography';

// Containers
import Form from './containers/Form';
import Table from './containers/Table';

// Constants
import { ADD_COLLABORATOR_FORM, ADD_COLLABORATOR_MODAL } from '@constants';

// Hook
import { useCollaborators } from './Collaborators.hooks';

// Styles
import styles from './Collaborators.scss';

const Collaborators = () => {
  const {
    collaborators,
    handleAddClick,
    handleRemoveClick,
    handleFormSubmit
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

        <Modal
          classes={{ container: styles.Container }}
          id={ADD_COLLABORATOR_MODAL}
          title="Add Collaborator"
        >
          {({ id, initialValues }: any) => (
            <>
              <P className={styles.Description} component="div">
                You can only find a Fleetly user by their email address or
                username
              </P>

              <Form
                form={`${ADD_COLLABORATOR_FORM}${id ? `-${id}` : ''}`}
                initialValues={{ ...initialValues, type: 'TEXT' }}
                onSubmit={handleFormSubmit}
              />
            </>
          )}
        </Modal>
      </Wrapper>
    </Page>
  );
};

export default Collaborators;
