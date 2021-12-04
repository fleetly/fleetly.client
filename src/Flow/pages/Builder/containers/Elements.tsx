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
import styles from './Elements.scss';

export interface BuilderElementsFormProps {
  id: string;
  payload: any;
}

export const BuilderElementsForm: React.FC<BuilderElementsFormProps> = ({
  id,
  children,
  payload
}) => {
  // Setup
  const { handleApolloError } = useNotifications();

  // Mutation
  const [removeElement, { loading }] = useMutation(REMOVE_ELEMENT, {
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

  const handleFormSubmit = useCallback(async () => true, []);

  const handleRemoveClick = useCallback(
    async (event: React.SyntheticEvent<HTMLButtonElement>) => {
      await removeElement({
        variables: { elementId: event.currentTarget.dataset.elementId }
      });
    },
    [removeElement]
  );

  return (
    <Form initialValues={{ id, ...payload }} onSubmit={handleFormSubmit}>
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
              data-element-id={id}
              icon="far fa-trash-alt"
              loaded={loading}
              onClick={handleRemoveClick}
              variant="outlined"
            />
          </div>

          <div className={styles.Container}>{children}</div>
        </form>
      )}
    </Form>
  );
};

export const BuilderElements: React.FC = ({ children }) => (
  <div className={styles.Root}>
    {Children.map(children, (child: any) => (
      <BuilderElementsForm children={child} {...child.props} />
    ))}
  </div>
);
