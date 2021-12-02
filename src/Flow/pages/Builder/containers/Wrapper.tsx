import { useMutation } from '@apollo/client';
import { debounce } from 'lodash';
import React, { Children, useCallback } from 'react';
import { Form, FormSpy } from 'react-final-form';

// Components
import Button from '@components/Button';

// GraphQL
import REMOVE_ELEMENT from '../graphql/removeElement.gql';
import UPDATE_ELEMENT from '../graphql/updateElement.gql';

// Store
import { useNotifications } from '@store';

// Styles
import styles from './Wrapper.scss';

export const BuilderWrapper: React.FC = ({ children }) => {
  // Setup
  const { handleApolloError } = useNotifications();

  // Mutation
  const [removeElement] = useMutation(REMOVE_ELEMENT, {
    onError: handleApolloError
  });

  const [updateElement] = useMutation(UPDATE_ELEMENT, {
    onError: handleApolloError
  });

  // Handlers
  const handleFormChange = debounce(async ({ values }) => {
    await updateElement({
      variables: { elementId: values.id, payload: values }
    });
  }, 1000);

  const handleFormSubmit = useCallback(async () => {
    return true;
  }, []);

  const handleRemoveClick = useCallback(
    async (event: React.SyntheticEvent<HTMLButtonElement>) => {
      await removeElement({
        variables: { elementId: event.currentTarget.dataset.elementId }
      });
    },
    [removeElement]
  );

  return (
    <div className={styles.Root}>
      {Children.map(children, (child: any) => (
        <Form
          initialValues={{ id: child.props.id, ...child.props.payload }}
          onSubmit={handleFormSubmit}
        >
          {({ handleSubmit }) => (
            <form className={styles.Form} onSubmit={handleSubmit}>
              <FormSpy
                onChange={handleFormChange}
                subscription={{ values: true }}
              />

              <div className={styles.Actions}>
                <Button
                  className={styles.Remove}
                  color="red"
                  data-element-id={child.props.id}
                  icon="far fa-trash-alt"
                  onClick={handleRemoveClick}
                  variant="outlined"
                />
              </div>

              <div className={styles.Container}>{child}</div>
            </form>
          )}
        </Form>
      ))}
    </div>
  );
};
