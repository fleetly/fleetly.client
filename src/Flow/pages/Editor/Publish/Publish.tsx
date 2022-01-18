import { useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { useParams } from 'react-router-dom';

// API
import { PUBLISH_FLOW } from '@flow/Flow.gql';

// Components
import Button from '@components/Button';

// Store
import { useNotifications } from '@store';

export const EditorPublish: React.FC = () => {
  // Setup
  const { createNotification, handleApolloError } = useNotifications();
  const { flowId } = useParams<{ flowId: string }>();

  // API
  const [publishFlow] = useMutation(PUBLISH_FLOW, {
    onCompleted: () =>
      createNotification({
        title: 'The flow published!',
        timeout: 5000,
        variant: 'success'
      }),
    onError: handleApolloError
  });

  // Handlers
  const handleFormSubmit = useCallback(async () => {
    await publishFlow({ variables: { flowId } });
  }, [flowId, publishFlow]);

  return (
    <Form onSubmit={handleFormSubmit}>
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Button
            color="green"
            icon="fad fa-rocket-launch"
            loaded={submitting}
            type="submit"
            variant="outlined"
          >
            Publish
          </Button>
        </form>
      )}
    </Form>
  );
};
