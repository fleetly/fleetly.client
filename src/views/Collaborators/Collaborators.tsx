import * as React from 'react';

// Components
import Button from '@components/Button';
import Modal from '@components/Modal';
import Page, { Wrapper } from '@components/Page';
import { P } from '@components/Typography';

// Containers
import AddForm from './containers/AddForm';
import Table from './containers/Table';

// Constants
import { ADD_COLLABORATOR_FORM, ADD_COLLABORATOR_MODAL } from '@constants';

// Hook
import { useCollaborators } from './Collaborators.hooks';

// Styles
import styles from './Collaborators.scss';

const Collaborators = () => {
  const { handleAddClick, handleAddFormSubmit } = useCollaborators();

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
        <Table />

        <Modal
          classes={{ container: styles.Container }}
          id={ADD_COLLABORATOR_MODAL}
          title="Add Collaborator"
        >
          <P className={styles.Description} component="div">
            You can only find a Fleetly user by their email address or username
          </P>

          <AddForm
            form={ADD_COLLABORATOR_FORM}
            onSubmit={handleAddFormSubmit}
          />
        </Modal>
      </Wrapper>
    </Page>
  );
};

export default Collaborators;
