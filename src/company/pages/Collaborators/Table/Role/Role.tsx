import { ApolloError, useMutation } from '@apollo/client';
import React, { useCallback, useRef } from 'react';
import { Form, FormSpy } from 'react-final-form';
import { useParams } from 'react-router-dom';

// Fleetly
import { CollaboratorRole } from '@fleetly/core/interfaces';

// Components
import { Select } from '@components/Form';

// Constants
import { ROLES } from '@constants';

// GraphQL
import UPDATE_COLLABORATOR_ROLE from './Role.gql';
import GET_COLLABORATOR_LIST from '../../Collaborators.gql';

// Store
import { useNotifications } from '@store';

// Styles
import styles from './Role.scss';

export interface CollaboratorsTableRoleFormValues {
  collaboratorId: string;
  newRole: CollaboratorRole;
}

export interface CollaboratorsTableRoleProps {
  initialValues: CollaboratorsTableRoleFormValues;
}

const OPTIONS = ROLES.map((role) => ({
  options: [role]
}));

export const CollaboratorsTableRole: React.FC<CollaboratorsTableRoleProps> = ({
  initialValues
}) => {
  // Setup
  const { handleApolloError } = useNotifications();
  const { companyId } = useParams<{ companyId: string }>();

  // Refs
  const $form = useRef<HTMLFormElement>(null);

  // Mutations
  const [updateCollaboratorRole] = useMutation(UPDATE_COLLABORATOR_ROLE, {
    // onError: handleApolloError,
    refetchQueries: [{ query: GET_COLLABORATOR_LIST, variables: { companyId } }]
  });

  // Handlers
  const handleFormSubmit = useCallback(
    async (values: CollaboratorsTableRoleFormValues, { reset }) => {
      try {
        await updateCollaboratorRole({ variables: values });
      } catch (error) {
        handleApolloError(error as ApolloError);
        reset();
      }
    },
    [handleApolloError, updateCollaboratorRole]
  );

  const handleRoleChange = useCallback(
    ({ values }: { values: CollaboratorsTableRoleFormValues }) =>
      values.newRole !== initialValues.newRole &&
      $form?.current?.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true })
      ),
    [initialValues.newRole]
  );

  return (
    <Form initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} ref={$form}>
          <FormSpy
            onChange={handleRoleChange}
            subscription={{ values: true }}
          />

          <Select
            className={styles.Select}
            loaded={submitting}
            name="newRole"
            options={OPTIONS}
            variant="filled"
          />
        </form>
      )}
    </Form>
  );
};
