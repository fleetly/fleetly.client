import * as React from 'react';
import { useMutation } from 'react-apollo';

// Components
import { gqlErrorHandler } from '@components/Form';

// Containers
import { SubscriberContext } from '@containers/Subscriber';

// GraphQL
import ADD_TAG from '../../graphql/addTag.gql';
import GET_SUBSCRIBER_BY_ID from '../../graphql/getSubscriberById.gql';
import REMOVE_TAG from '../../graphql/removeTag.gql';

// Interfaces
import { ITag } from '@interfaces/tag.interface';

const useSubscriberTags = (tags: ITag[] = [], value: string[] = []) => {
  // Setup
  const { companyId, subscriberId } = React.useContext(SubscriberContext);

  // Mutations
  const refetchQueries = [
    {
      query: GET_SUBSCRIBER_BY_ID,
      variables: { companyId, subscriberId }
    }
  ];

  const [addTag] = useMutation(ADD_TAG, { refetchQueries });
  const [removeTag] = useMutation(REMOVE_TAG, { refetchQueries });

  // Data
  const displayedTags = React.useMemo(
    () => value.map((id) => tags.find((tag) => tag.id === id)),
    [tags, value]
  );

  const options = React.useMemo(
    () =>
      tags
        .filter(({ id }) => value.indexOf(id) === -1)
        .map(({ id, color, title }) => ({ color, label: title, value: id })),
    [tags, value]
  );

  // Handlers
  const handleFormSubmit = React.useCallback(
    async ({ tagId }: Subscriber.AddTagFormValues, dispatch, { reset }) => {
      reset();

      try {
        await addTag({ variables: { tagId, subscriberId } });
        return true;
      } catch (error) {
        return gqlErrorHandler(error);
      }
    },
    [addTag, subscriberId]
  );

  const handleRemoveClick = React.useCallback(
    async (event: React.SyntheticEvent<HTMLButtonElement>) => {
      try {
        await removeTag({
          variables: { tagId: event.currentTarget.dataset.tagId, subscriberId }
        });
      } catch (error) {
        // tslint:disable-next-line: no-console
        console.error(error);
      }

      return true;
    },
    [removeTag, subscriberId]
  );

  return {
    displayedTags,
    handleFormSubmit,
    handleRemoveClick,
    options
  };
};

export { useSubscriberTags };
