import classNames from 'classnames';
import insertTextAtCursor from 'insert-text-at-cursor';
import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Emoji from '../components/Emoji';
import { yupValidator } from '@components/Form';

import { ChatSendTextarea } from '../components/Textarea';

// Styles
import styles from './Form.scss';

export const ChatSendForm: React.FC<any> = ({ ...props }) => {
  // Setup
  const { chatId, isComment } = props as any;
  const textareaId = `${chatId}-text`;

  // Handlers
  const handleEmojiSelect = useCallback(
    (emoji: string) => {
      const el = document.getElementById(textareaId);
      el && insertTextAtCursor(el as HTMLTextAreaElement, emoji);
    },
    [textareaId]
  );

  const handleFormSubmit = useCallback(async () => {
    return true;
  }, []);

  return (
    <Form
      onSubmit={handleFormSubmit}
      validate={yupValidator(
        yup.object().shape({ text: yup.string().required() })
      )}
    >
      {({ dirty, handleSubmit, submitting, valid }) => (
        <form
          className={classNames(styles.Root, {
            [styles.RootIsComment]: isComment
          })}
          onSubmit={handleSubmit}
        >
          <Emoji onSelect={handleEmojiSelect} />

          <ChatSendTextarea id={textareaId} name="text" />

          <div className={styles.Right}>
            <Button
              color={isComment ? 'orange' : 'blue'}
              disabled={!dirty || !valid || submitting}
              icon={
                isComment ? 'fas fa-comment-alt-lines' : 'fas fa-paper-plane'
              }
              type="submit"
            />
          </div>
        </form>
      )}
    </Form>
  );
};
