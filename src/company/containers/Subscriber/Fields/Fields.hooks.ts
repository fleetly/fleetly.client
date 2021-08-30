import { ApolloError, useMutation } from '@apollo/client';
import { useCallback, useContext, useMemo } from 'react';

// Components
import { gqlErrorHandler } from '@components/Form';
import { SubscriberFieldsItemProps } from './components/Item';

// Constants
import { SET_FIELD_MODAL } from '@constants';

// Contexts
import { SubscriberContext } from '../Subscriber';

// GraphQL
import SET_FIELD from './graphql/setField.gql';
import UNSET_FIELD from './graphql/unsetField.gql';

import GET_SUBSCRIBER from '../Subscriber.gql';

// Interfaces
import { IField, IFieldTypeOption } from '@interfaces/field.interface';
import { ISubscriberField } from '@interfaces/subscriber.interface';

// Store
import { useModals, useNotifications } from '@store';

export const useSubscriberFields = ({
  fields = [],
  fieldTypes = [],
  values = []
}: {
  fields: IField[];
  fieldTypes: IFieldTypeOption[];
  values: ISubscriberField[];
}) => {
  // Setup
  const { companyId, subscriberId } = useContext(SubscriberContext);
  const { closeModal } = useModals(SET_FIELD_MODAL);
  const { handleApolloError } = useNotifications();

  // Mutations
  const [setField] = useMutation(SET_FIELD, {
    refetchQueries: [
      {
        query: GET_SUBSCRIBER,
        variables: { companyId, subscriberId }
      }
    ]
  });

  const [unsetField] = useMutation(UNSET_FIELD, {
    onError: handleApolloError,
    refetchQueries: [
      {
        query: GET_SUBSCRIBER,
        variables: { companyId, subscriberId }
      }
    ]
  });

  // Memo
  const displayedFields: Omit<
    SubscriberFieldsItemProps,
    'onRemove'
  >[] = useMemo(
    () =>
      fields
        .map(({ id, title, type }: any) => ({
          id,
          color: fieldTypes.find(({ value }) => value === type)!.color,
          title,
          value: values.find(({ fieldId }) => fieldId === id)?.value
        }))
        .sort((a: any, b: any) =>
          a.value && !b.value ? -1 : !a.value && b.value ? 1 : 0
        ) || [],
    [fields, fieldTypes, values]
  );

  // Handlers
  const handleFormSubmit = useCallback(
    async ({ fieldId, value }) => {
      try {
        await setField({ variables: { fieldId, subscriberId, value } });
        closeModal();
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [closeModal, setField, subscriberId]
  );

  const handleRemoveClick = useCallback(
    async (event: React.SyntheticEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      await unsetField({
        variables: {
          fieldId: event.currentTarget.dataset.fieldId,
          subscriberId
        }
      });
    },
    [subscriberId, unsetField]
  );

  return { displayedFields, handleFormSubmit, handleRemoveClick };
};
