import insertTextAtCursor from 'insert-text-at-cursor';
import React, { SyntheticEvent, useCallback } from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Emoji from '../components/Emoji';
import Form, { asyncValidate } from '@components/Form';

import Textarea from '../components/Textarea';

// Constants
import { SEND_MESSAGE_FORM } from '@constants';

// Styles
import styles from './Form.scss';

export enum SubmitType {
  COMMENT = 'COMMENT',
  DEFAULT = 'DEFAULT'
}

const ChatSendForm: React.FC<InjectedFormProps<any, any>> = ({
  dirty,
  handleSubmit,
  reset,
  submitting,
  valid,
  ...props
}): JSX.Element => {
  // Setup
  const { chatId, onSubmit } = props as any;
  const textareaId = `${chatId}-text`;

  // Handlers
  const handleCommentClick = useCallback(
    handleSubmit(({ text }) => onSubmit(SubmitType.COMMENT, text, reset)),
    []
  );

  const handleEmojiSelect = useCallback(
    (event: SyntheticEvent, { emoji }) => {
      const el = document.getElementById(textareaId);
      el && insertTextAtCursor(el as HTMLTextAreaElement, emoji);
    },
    [textareaId]
  );

  const handleSendClick = useCallback(
    handleSubmit(({ text }) => onSubmit(SubmitType.DEFAULT, text, reset)),
    []
  );

  return (
    <Form
      classes={{ root: styles.Root, container: styles.Container }}
      onSubmit={handleSubmit}
    >
      <Emoji onSelect={handleEmojiSelect} />

      <Textarea id={textareaId} name="text" />

      <div className={styles.Right}>
        <Button
          color="primary"
          disabled={!dirty || !valid || submitting}
          icon="fas fa-paper-plane"
          onClick={handleSendClick}
        />

        <Button
          className={styles.Comment}
          disabled={!dirty || !valid || submitting}
          icon="fas fa-comment-alt-dots"
          onClick={handleCommentClick}
        />
      </div>
    </Form>
  );
};

export default reduxForm<any, any>({
  asyncValidate: asyncValidate(
    yup.object().shape({ text: yup.string().required() })
  ),
  form: SEND_MESSAGE_FORM
})(ChatSendForm);
