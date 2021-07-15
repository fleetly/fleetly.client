import { ApolloError } from 'apollo-boost';
import React, { useCallback, useState } from 'react';
import { useMutation } from 'react-apollo';

// Components
import Button from '@components/Button';
import { gqlErrorHandler } from '@components/Form';
import Tabs, { Tab } from '@components/Tabs';
import { Text } from '@components/Typography';

// Containers
import Form from './containers/Form';

// GraphQL
import SEND_MESSAGE from './graphql/sendMessage.gql';

// Styles
import styles from './Send.scss';

export enum SubmitType {
  COMMENT = 'COMMENT',
  DEFAULT = 'DEFAULT'
}

const ChatSend: React.FC<Chat.Send.Root> = ({ chatId }) => {
  // State
  const [currentType, setCurrentType] = useState<SubmitType>(
    SubmitType.DEFAULT
  );

  // Mutations
  const [sendMessage] = useMutation(SEND_MESSAGE);

  // Handlers
  const handleSubmit = useCallback(
    async ({ text }) => {
      try {
        await sendMessage({
          variables: {
            chatId,
            isComment: currentType === SubmitType.COMMENT,
            text
          }
        });
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [chatId, currentType, sendMessage]
  );

  return (
    <div className={styles.Root}>
      {false ? (
        <div className={styles.Closed}>
          <Text>
            The conversation was closed. To write a message, you need to open it
            again.
          </Text>

          <Button className={styles.Open} color="primary">
            Open
          </Button>
        </div>
      ) : (
        <>
          <div className={styles.Header}>
            <Tabs
              className={styles.Tabs}
              onSelect={setCurrentType}
              value={currentType}
            >
              <Tab label="Message" value={SubmitType.DEFAULT} />
              <Tab label="Comment" value={SubmitType.COMMENT} />
            </Tabs>
          </div>

          <Form
            chatId={chatId}
            isComment={currentType === SubmitType.COMMENT}
            onSubmit={handleSubmit}
          />
        </>
      )}
    </div>
  );
};

export default ChatSend;
