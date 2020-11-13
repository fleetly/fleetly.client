import * as React from 'react';
import { useMutation } from 'react-apollo';
import { useDispatch } from 'react-redux';

// Components
import { gqlErrorHandler } from '@components/Form';

// Constants
import { SET_FIELD_MODAL } from '@constants';

// Containers
import { SubscriberContext } from '@containers/Subscriber';

// GraphQL
import GET_SUBSCRIBER_BY_ID from '../../graphql/getSubscriberById.gql';
import SET_FIELD from '../../graphql/setField.gql';
import UNSET_FIELD from '../../graphql/unsetField.gql';

// Store
import { closeModal, openModal } from '@store';
import { IField, IFieldTypeOption } from '@interfaces/field.interface';
import { ISubscriberField } from '@interfaces/subscriber.interface';

const useSubscriberFields = ({
  fields = [],
  fieldTypes = [],
  values = []
}: {
  fields: IField[];
  fieldTypes: IFieldTypeOption[];
  values: ISubscriberField[];
}) => {
  // Setup
  const { companyId, subscriberId } = React.useContext(SubscriberContext);
  const dispatch = useDispatch();

  // Data
  const displayedFields = React.useMemo(
    () =>
      fields
        .map(({ id, title, type }: any) => {
          const { color } =
            fieldTypes.find(({ value }: any) => value === type) || {};

          const { value } =
            values.find(({ fieldId }: any) => fieldId === id) || {};

          return {
            id,
            color,
            title,
            value
          };
        })
        .sort((a: any, b: any) =>
          a.value && !b.value ? -1 : !a.value && b.value ? 1 : 0
        ) || [],
    [fields, fieldTypes, values]
  );

  // Mutations
  const refetchQueries = [
    {
      query: GET_SUBSCRIBER_BY_ID,
      variables: { companyId, subscriberId }
    }
  ];

  const [setField] = useMutation(SET_FIELD, { refetchQueries });
  const [unsetField] = useMutation(UNSET_FIELD, { refetchQueries });

  // Handlers
  const handleFieldClick = React.useCallback(
    (fieldId: string, fieldTitle: string, value: string) => {
      dispatch(
        openModal(SET_FIELD_MODAL, { data: { fieldId, fieldTitle, value } })
      );
    },
    [dispatch]
  );

  const handleFieldRemove = React.useCallback(
    async (fieldId: string) => {
      try {
        await unsetField({ variables: { fieldId, subscriberId } });
        dispatch(closeModal(SET_FIELD_MODAL));
      } catch (error) {
        return error;
      }
    },
    [dispatch, subscriberId, unsetField]
  );

  const handleFieldSubmit = React.useCallback(
    async (values) => {
      try {
        await setField({
          variables: { ...values, subscriberId }
        });
        return dispatch(closeModal(SET_FIELD_MODAL));
      } catch (error) {
        return gqlErrorHandler(error);
      }
    },
    [dispatch, setField, subscriberId]
  );

  return {
    displayedFields,
    handleFieldClick,
    handleFieldRemove,
    handleFieldSubmit
  };
};

export { useSubscriberFields };