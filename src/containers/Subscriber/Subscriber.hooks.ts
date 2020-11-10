import * as React from 'react';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// GraphQL
import GET_SUBSCRIBER_BY_ID from './graphql/getSubscriberById.gql';

// Interface
import { IField, IFieldTypeOption } from '@interfaces/field.interface';
import { ISubscriber } from '@interfaces/subscriber.interface';
import { ITag } from '@interfaces/tag.interface';

const VIEW = {
  FIELDS: 'fields',
  TAGS: 'tags'
};

const useSubscriber = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();

  // State
  const [currentView, setCurrentView] = React.useState(VIEW.TAGS);

  // Data
  const { data } = useQuery<{
    fields: IField[];
    fieldTypes: IFieldTypeOption[];
    subscriber: ISubscriber;
    tags: ITag[];
  }>(GET_SUBSCRIBER_BY_ID, {
    variables: { companyId, subscriberId: '5faa9d528510514cb8d39f70' }
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
    companyId,
    currentView,
    handleSelectTab: setCurrentView,
    fields,
    subscriber: data?.subscriber,
    tags: data?.tags
  };
};

export { useSubscriber };
export { VIEW };
