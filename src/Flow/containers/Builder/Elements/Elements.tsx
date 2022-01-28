import { useMutation } from '@apollo/client';
import classNames from 'classnames';
import { diff } from 'deep-object-diff';
import { debounce, isEmpty } from 'lodash';
import React, { Children, useCallback, useContext } from 'react';
import { Form, FormSpy } from 'react-final-form';

// API
import { REMOVE_ELEMENT, UPDATE_ELEMENT } from '@flow/Flow.gql';

// Components
import Button from '@components/Button';

// Contexts
import { BuilderContext } from '../Builder.context';

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
  const { isEditable } = useContext(BuilderContext);
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
    if (isEditable && !isEmpty(diff({ id, ...payload }, values))) {
      await updateElement({
        variables: { elementId: values.id, payload: values }
      });
    }
  }, 1000);

  const handleFormSubmit = useCallback(async () => true, []);

  const handleRemoveClick = useCallback(
    async (event: React.SyntheticEvent<HTMLButtonElement>) => {
      isEditable &&
        (await removeElement({
          variables: { elementId: event.currentTarget.dataset.elementId }
        }));
    },
    [isEditable, removeElement]
  );

  return (
    <Form initialValues={{ id, ...payload }} onSubmit={handleFormSubmit}>
      {({ handleSubmit }) => (
        <form className={styles.Form} onSubmit={handleSubmit}>
          {isEditable && (
            <>
              <FormSpy
                onChange={handleFormChange}
                subscription={{ active: true, values: true }}
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
            </>
          )}

          <div className={styles.Container}>{children}</div>
        </form>
      )}
    </Form>
  );
};

export interface BuilderElementsProps {
  className?: string;
}

export const BuilderElements: React.FC<BuilderElementsProps> = ({
  children,
  className
}) => (
  <div className={classNames(className, styles.Root)}>
    {Children.map(children, (child: any) => (
      <BuilderElementsForm children={child} {...child.props} />
    ))}
  </div>
);
