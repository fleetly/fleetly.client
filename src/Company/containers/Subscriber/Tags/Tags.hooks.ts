import { useMutation } from '@apollo/client';
import { useCallback, useContext, useMemo, useRef } from 'react';

// Contexts
import { SubscriberContext } from '../Subscriber';

// GraphQL
import ADD_TAG from './graphql/addTag.gql';
import REMOVE_TAG from './graphql/removeTag.gql';

import GET_SUBSCRIBER from '../Subscriber.gql';

// Interfaces
import { ITag } from '@interfaces/tag.interface';

// Store
import { useNotifications } from '@store';

export const useSubscriberTags = ({
  tags,
  values
}: {
  tags: ITag[];
  values: string[];
}) => {
  // Setup
  const { companyId, subscriberId } = useContext(SubscriberContext);
  const { handleApolloError } = useNotifications();

  // Refs
  const $form = useRef<HTMLFormElement>(null);

  // Mutations
  const [addTag] = useMutation(ADD_TAG, {
    onError: handleApolloError,
    refetchQueries: [
      { query: GET_SUBSCRIBER, variables: { companyId, subscriberId } }
    ]
  });

  const [removeTag] = useMutation(REMOVE_TAG, {
    onError: handleApolloError,
    refetchQueries: [
      { query: GET_SUBSCRIBER, variables: { companyId, subscriberId } }
    ]
  });

  // Memo
  const displayedTags = useMemo(
    () => values.map((id) => tags.find((tag) => tag.id === id)),
    [tags, values]
  );

  const options = useMemo(
    () =>
      tags
        .filter(({ id }) => values.indexOf(id) === -1)
        .map(({ id, color, title }) => ({ color, label: title, value: id })),
    [tags, values]
  );

  // Handlers
  const handleFormChange = useCallback(
    () =>
      $form?.current?.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true })
      ),
    []
  );

  const handleFormSubmit = useCallback(
    async ({ tagId }, { restart }) => {
      await addTag({ variables: { tagId, subscriberId } });
      restart();
    },
    [addTag, subscriberId]
  );

  const handleItemRemove = useCallback(
    async (event: React.SyntheticEvent<HTMLButtonElement>) => {
      await removeTag({
        variables: { tagId: event.currentTarget.dataset.tagId, subscriberId }
      });
    },
    [removeTag, subscriberId]
  );

  return {
    $form,
    displayedTags,
    handleFormChange,
    handleFormSubmit,
    handleItemRemove,
    options
  };
};
