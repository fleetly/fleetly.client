import { useMutation } from '@apollo/client';
import { diff } from 'deep-object-diff';
import { isEmpty } from 'lodash';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useFormState } from 'react-final-form';

// API
import { REMOVE_ELEMENT, UPDATE_ELEMENT } from '@flow/Flow.gql';

// Builder
import { BuilderContext, ElementContext } from '@flow/builder';
import { useNotifications } from '@store';

// Components
import Button from '@components/Button';

// Hooks
import { useOutsideClick } from '@hooks/events';

// Styles
import styles from './Form.scss';

export interface ElementsFormProps {
  id: string;
  payload: any;
}

export const ElementsForm: React.FC<ElementsFormProps> = ({
  children,
  id,
  payload
}) => {
  // Setup
  const { isEditable } = useContext(BuilderContext);
  const { values } = useFormState();
  const { handleApolloError } = useNotifications();

  // State
  const [isSelected, setSelectState] = useState(false);

  // Mutation
  const [removeElement, { loading }] = useMutation(REMOVE_ELEMENT, {
    onError: handleApolloError
  });

  const [updateElement] = useMutation(UPDATE_ELEMENT, {
    onError: handleApolloError
  });

  // Effects
  useEffect(() => {
    if (
      !isSelected &&
      isEditable &&
      !isEmpty(diff({ id, ...payload }, values))
    ) {
      updateElement({
        variables: { elementId: id, payload: values }
      });
    }
  }, [id, isEditable, isSelected, payload, updateElement, values]);

  // Handlers
  const handleFormClick = useCallback(() => setSelectState(isEditable), [
    isEditable
  ]);

  const handleRemoveClick = useCallback(
    async (event: React.SyntheticEvent<HTMLButtonElement>) => {
      isEditable &&
        (await removeElement({
          variables: { elementId: event.currentTarget.dataset.elementId }
        }));
    },
    [isEditable, removeElement]
  );

  // Refs
  const $form = useOutsideClick<HTMLFormElement>(() => {
    setSelectState(false);
  });

  return (
    <ElementContext.Provider value={{ isSelected }}>
      <form className={styles.Root} onClick={handleFormClick} ref={$form}>
        {isEditable && (
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
        )}

        <div className={styles.Container}>{children}</div>
      </form>
    </ElementContext.Provider>
  );
};
