import * as React from 'react';

// Components
import Button from '@components/Button';
import Modal from '@components/Modal';
import Page, { Wrapper } from '@components/Page';
import { P } from '@components/Typography';

// Constants
import { CREATE_TAG_FORM, CREATE_TAG_MODAL } from '@constants';

// Containers
import Form from './containers/Form';
import Table from './containers/Table';

// Hooks
import { useTags } from './Tags.hooks';

// Styles
import styles from './Tags.scss';

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

        <Modal
          classes={{ container: styles.Container }}
          id={CREATE_TAG_MODAL}
          title="Create new tag"
        >
          {({ id, initialValues }: any) => (
            <>
              {!id && (
                <P className={styles.Description} component="dib">
                  Group your followers with unique tags!
                </P>
              )}

              <Form
                form={`${CREATE_TAG_FORM}${id ? `-${id}` : ''}`}
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
              />
            </>
          )}
        </Modal>
      </Wrapper>
    </Page>
  );
};

export default Tags;
