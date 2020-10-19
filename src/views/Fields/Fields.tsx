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
import { CREATE_FIELD_FORM, CREATE_FIELD_MODAL } from '@constants';

// Hooks
import { useFields } from './Fields.hooks';

// Styles
import styles from './Fields.scss';

const Fields = () => {
  const {
    handleCreateClick,
    handleDeleteClick,
    handleEditClick,
    handleFormSubmit,
    fields
  } = useFields();

  return (
    <Page title="Fields">
      <Wrapper
        actions={
          <Button color="primary" onClick={handleCreateClick}>
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

        <Modal
          classes={{ container: styles.Container }}
          id={CREATE_FIELD_MODAL}
          title="Create new field"
        >
          {({ id, initialValues }: any) => (
            <>
              {!id && (
                <div className={styles.Description}>
                  <P>
                    Store important information about your subscribers in
                    special fields.
                  </P>

                  <P className={styles.Careful}>
                    Be careful, the data type of the field cannot be changed!
                  </P>
                </div>
              )}

              <Form
                form={`${CREATE_FIELD_FORM}${id ? `-${id}` : ''}`}
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

export default Fields;
