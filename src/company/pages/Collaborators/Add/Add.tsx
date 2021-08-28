import { ApolloError, useMutation, useQuery } from '@apollo/client';
import React, { useCallback, useMemo } from 'react';
import { Form } from 'react-final-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import {
  Actions,
  Error,
  Fieldset,
  Select,
  gqlErrorHandler,
  yupValidator
} from '@components/Form';
import Modal from '@components/Modal';

// Constants
import { ADD_COLLABORATOR_MODAL } from '@constants';

// GraphQL
import ADD_COLLABORATOR from './graphql/addCollaborator.gql';
import SEARCH_USER from './graphql/searchUser.gql';

import GET_COLLABORATOR_LIST from '../Collaborators.gql';

// Interfaces
import { IUser } from '@interfaces/user.interface';

// Store
import { useModals } from '@store';

// Utils
import { convertToColor } from '@utils/string';

export interface CollaboratorsAddFormValues {
  userId: string;
}

export const CollaboratorsAdd = () => {
  // Setup
  const { closeModal } = useModals(ADD_COLLABORATOR_MODAL);
  const { companyId } = useParams<{ companyId: string }>();

  // Data
  const { data, loading } = useQuery<{ users: IUser[] }>(SEARCH_USER);

  // Mutations
  const [addCollaborator] = useMutation(ADD_COLLABORATOR, {
    refetchQueries: [{ query: GET_COLLABORATOR_LIST, variables: { companyId } }]
  });

  // Handlers
  const handleFormSubmit = useCallback(
    async ({ userId }: CollaboratorsAddFormValues) => {
      try {
        await addCollaborator({ variables: { companyId, userId } });
        closeModal();
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [addCollaborator, closeModal, companyId]
  );

  // Memo
  const options = useMemo(
    () =>
      (data?.users || []).map(({ id, email, username }) => ({
        avatar: {
          alt: username
        },
        color: convertToColor(id),
        description: username,
        label: email,
        value: id
      })),
    [data]
  );

  return (
    <Modal id={ADD_COLLABORATOR_MODAL} title="Add collaborator">
      <Form
        onSubmit={handleFormSubmit}
        validate={yupValidator(
          yup.object().shape({ userId: yup.string().required() })
        )}
      >
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Error />

            <Fieldset>
              <Select loaded={loading} name="userId" options={options} />
            </Fieldset>

            <Actions>
              <Button
                color="primary"
                fullWidth
                loaded={submitting}
                type="submit"
              >
                Add
              </Button>
            </Actions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
