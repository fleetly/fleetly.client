import { useMutation } from '@apollo/client';
import { debounce } from 'lodash';
import React, { useCallback } from 'react';
import { Form, FormSpy } from 'react-final-form';

// GraphQL
import UPDATE_ELEMENT from '@flow/graphql/updateElement.gql';

// Store
import { useNotifications } from '@store';

// Styles
import styles from './Element.scss';

export interface ElementProps {
  id: string;
  payload: unknown;
}

export const Element: React.FC<ElementProps> = ({ children, id, payload }) => {
  // Setup
  const { handleApolloError } = useNotifications();

  // Mutation
  const [updateElement] = useMutation(UPDATE_ELEMENT, {
    onError: handleApolloError
  });

  // Handlers
  const handleFormChange = debounce(async ({ values }) => {
    await updateElement({ variables: { elementId: id, payload: values } });
  }, 1000);

  const handleFormSubmit = useCallback(async () => {
    return true;
  }, []);

  return (
    <Form initialValues={payload} onSubmit={handleFormSubmit}>
      {({ handleSubmit }) => (
        <form className={styles.Root} onSubmit={handleSubmit}>
          <FormSpy
            onChange={handleFormChange}
            subscription={{ values: true }}
          />

          {children}
        </form>
      )}
    </Form>
  );
};
