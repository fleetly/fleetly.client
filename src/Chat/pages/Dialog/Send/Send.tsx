import { ApolloError, useMutation } from '@apollo/client';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { Form } from 'react-final-form';
import * as yup from 'yup';

// Fleetly
import { ChatStatus } from '@fleetly/chat/interfaces';

// Components
import Button from '@components/Button';
import { gqlErrorHandler, yupValidator } from '@components/Form';
import Tabs, { Tab } from '@components/Tabs';
import { Text } from '@components/Typography';

import { DialogSendEmoji } from './components/Emoji';
import { DialogSendTextarea } from './components/Textarea';

// GraphQL
import OPEN_CHAT from './graphql/openChat.gql';
import SEND_MESSAGE from './graphql/sendMessage.gql';

// Hooks
import { useChatRefetch } from '@chat/hooks/chatRefetch';

// Interfaces
import { IChat } from '@chat/interfaces/chat.interface';

// Styles
import styles from './Send.scss';

export enum SubmitType {
  COMMENT = 'COMMENT',
  DEFAULT = 'DEFAULT'
}

export const DialogSend: React.FC<IChat> = ({ id, status }) => {
  // Setup
  const { refetchQueries } = useChatRefetch();
  const textareaId = `${id}-textarea`;

  // State
  const [currentType, setCurrentType] = useState<SubmitType>(
    SubmitType.DEFAULT
  );

  const isComment = currentType === SubmitType.COMMENT;

  // Mutations
  const [openChat, { loading }] = useMutation(OPEN_CHAT, {
    refetchQueries,
    variables: { chatId: id }
  });

  const [sendMessage] = useMutation(SEND_MESSAGE);

  // Handlers
  const handleFormSubmit = useCallback(
    async ({ text }, { restart }) => {
      try {
        await sendMessage({
          variables: {
            chatId: id,
            isComment,
            text
          }
        });

        restart();
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [id, isComment, sendMessage]
  );

  const handleOpenClick = useCallback(() => openChat(), [openChat]);

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
            color="blue"
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
            onSubmit={handleFormSubmit}
            validate={yupValidator(
              yup.object().shape({ text: yup.string().required() })
            )}
          >
            {({ dirty, handleSubmit, submitting, valid }) => (
              <form
                className={classNames(styles.Form, {
                  [styles.FormIsComment]: isComment
                })}
                onSubmit={handleSubmit}
              >
                <DialogSendEmoji id={textareaId} />
                <DialogSendTextarea id={textareaId} />

                <div className={styles.Right}>
                  <Button
                    color={isComment ? 'orange' : 'blue'}
                    disabled={!dirty || !valid || submitting}
                    icon={
                      isComment
                        ? 'fas fa-comment-alt-lines'
                        : 'fas fa-paper-plane'
                    }
                    type="submit"
                  />
                </div>
              </form>
            )}
          </Form>
        </>
      )}
    </div>
  );
};
