import { ApolloError } from 'apollo-boost';
import React, { useCallback, useState } from 'react';
import { useMutation } from 'react-apollo';

// Fleetly
import { ChatStatus } from '@fleetly/chat/interfaces';

// Components
import Button from '@components/Button';
import { gqlErrorHandler } from '@components/Form';
import Tabs, { Tab } from '@components/Tabs';
import { Text } from '@components/Typography';

// Containers
import Form from './containers/Form';

// Interfaces
import { IChat } from '@interfaces/chat.interface';

// GraphQL
import OPEN_CHAT from './graphql/openChat.gql';
import SEND_MESSAGE from './graphql/sendMessage.gql';

// Styles
import styles from './Send.scss';

export enum SubmitType {
  COMMENT = 'COMMENT',
  DEFAULT = 'DEFAULT'
}

const ChatSend: React.FC<IChat> = ({ id, status }) => {
  // State
  const [currentType, setCurrentType] = useState<SubmitType>(
    SubmitType.DEFAULT
  );

  // Mutations
  const [openChat, { loading }] = useMutation(OPEN_CHAT, {
    variables: { chatId: id }
  });

  const [sendMessage] = useMutation(SEND_MESSAGE);

  // Handlers
  const handleOpenClick = useCallback(() => openChat(), [openChat]);

  const handleSubmit = useCallback(
    async ({ text }) => {
      try {
        await sendMessage({
          variables: {
            chatId: id,
            isComment: currentType === SubmitType.COMMENT,
            text
          }
        });
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [currentType, id, sendMessage]
  );

  return (
    <div className={styles.Root}>
      {status === ChatStatus.CLOSED ? (
        <div className={styles.Closed}>
          <Text>
            The conversation was closed. To write a message, you need to open it
            again.
          </Text>

          <Button
            className={styles.Open}
            color="primary"
            loaded={loading}
            onClick={handleOpenClick}
          >
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
            chatId={id}
            isComment={currentType === SubmitType.COMMENT}
            onSubmit={handleSubmit}
          />
        </>
      )}
    </div>
  );
};

export default ChatSend;
