import { gqlErrorHandler } from '@components/Form';
import * as React from 'react';
import { useMutation } from 'react-apollo';

// Containers
import Form, { SubmitType } from './containers/Form';

// GraphQL
import SEND_MESSAGE from './graphql/sendMessage.gql';

const ChatSend: React.FC<Chat.Send.Root> = ({ chatId }) => {
  // Mutations
  const [sendMessage] = useMutation(SEND_MESSAGE);

  // Handlers
  const handleSubmit = React.useCallback(
    async (type: SubmitType, text: string) => {
      try {
        await sendMessage({
          variables: { chatId, isComment: type === SubmitType.COMMENT, text }
        });
      } catch (error) {
        return gqlErrorHandler(error);
      }
    },
    [chatId, sendMessage]
  );

  return <Form chatId={chatId} onSubmit={handleSubmit} />;
};

export default ChatSend;
