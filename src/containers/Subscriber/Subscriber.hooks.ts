import * as React from 'react';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// GraphQL
import GET_SUBSCRIBER_BY_ID from './graphql/getSubscriberById.gql';

// Interface
import { IField, IFieldTypeOption } from '@interfaces/field.interface';
import { ISubscriber } from '@interfaces/subscriber.interface';

const useSubscriber = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();

  // State
  const [currentTab, setCurrentTab] = React.useState('tags');

  // Data
  const { data } = useQuery<{
    fields: IField[];
    fieldTypes: IFieldTypeOption[];
    subscriber: ISubscriber;
  }>(GET_SUBSCRIBER_BY_ID, {
    variables: { companyId, subscriberId: '5fa43a8c772c06518c761998' }
  });

  const fields = React.useMemo(
    () =>
      data?.fields
        .map(({ id, title, type }: any) => {
          const { color } =
            data?.fieldTypes.find(({ value }: any) => value === type) || {};

          const { value } =
            data?.subscriber?.fields.find(
              ({ fieldId }: any) => fieldId === id
            ) || {};

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
    [data]
  );

  return {
    currentTab,
    handleSelectTab: setCurrentTab,
    fields,
    subscriber: data?.subscriber
  };
};

export { useSubscriber };
