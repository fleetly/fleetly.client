import { useMutation } from '@apollo/client';
import classNames from 'classnames';
import { diff } from 'deep-object-diff';
import { isEmpty } from 'lodash';
import React, {
  Children,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import { Form, useFormState } from 'react-final-form';

// API
import { REMOVE_ELEMENT, UPDATE_ELEMENT } from '@flow/Flow.gql';

// Components
import Button from '@components/Button';

// Contexts
import { BuilderContext } from '../Builder.context';

// Hooks
import { useOutsideClick } from '@hooks/events';

// Store
import { useNotifications } from '@store';

// Styles
import styles from './Elements.scss';

export interface BuilderElementsFormProps {
  id: string;
  payload: any;
}

export const BuilderElementsForm: React.FC<BuilderElementsFormProps> = ({
  children,
  id,
  payload
}) => {
  // Setup
  const { isEditable } = useContext(BuilderContext);
  const { values } = useFormState();
  const { handleApolloError } = useNotifications();

  // State
  const [isFocused, setFocusState] = useState(false);

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
      !isFocused &&
      isEditable &&
      !isEmpty(diff({ id, ...payload }, values))
    ) {
      updateElement({
        variables: { elementId: id, payload: values }
      });
    }
  }, [id, isEditable, isFocused, payload, updateElement, values]);

  // Handlers
  const handleFormClick = useCallback(() => setFocusState(true), []);

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
    setFocusState(false);
  });

  return (
    <form className={styles.Form} onClick={handleFormClick} ref={$form}>
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
  );
};

export interface BuilderElementsProps {
  className?: string;
}

export const BuilderElements: React.FC<BuilderElementsProps> = ({
  children,
  className
}) => {
  // Handlers
  const handleFormSubmit = useCallback(async () => true, []);

  return (
    <div className={classNames(className, styles.Root)}>
      {Children.map(children, (child: any) => {
        const { id, payload } = child.props;

        return (
          <Form initialValues={{ id, ...payload }} onSubmit={handleFormSubmit}>
            {() => (
              <BuilderElementsForm children={child} id={id} payload={payload} />
            )}
          </Form>
        );
      })}
    </div>
  );
};
