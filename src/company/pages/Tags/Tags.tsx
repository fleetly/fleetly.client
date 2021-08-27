import React from 'react';

// Components
import Button from '@components/Button';
import Page, { Wrapper } from '@components/Page';

// Constants
import { CREATE_TAG_MODAL } from '@constants';

// Fragments
import { TagsCreate } from './Create';
import { TagsTable } from './Table';

// Store
import { useModals } from '@store';

const Tags = () => {
  // Setup
  const { openModal } = useModals(CREATE_TAG_MODAL);

  return (
    <Page title="Tags">
      <Wrapper
        actions={
          <Button color="primary" onClick={openModal}>
            Create Tag
          </Button>
        }
        title="Tags"
      >
        <TagsTable />
        <TagsCreate />
      </Wrapper>
    </Page>
  );
};

export default Tags;

// <Modal
// classes={{ container: styles.Container }}
// id={CREATE_TAG_MODAL}
// title="Create new tag"
// >
// {({ initialValues }: Tags.ModalProps) => (
//   <>
//     {!initialValues?.tagId && (

//     )}

//     <Form
//       form={`${CREATE_TAG_FORM}${
//         initialValues?.tagId ? `-${initialValues?.tagId}` : ''
//       }`}
//       initialValues={initialValues}
//       onSubmit={handleFormSubmit}
//     />
//   </>
// )}
// </Modal>
