import classNames from 'classnames';
import insertTextAtCursor from 'insert-text-at-cursor';
import React, { useCallback } from 'react';
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

const ChatSendForm: React.FC<InjectedFormProps<any, any>> = ({
  dirty,
  handleSubmit,
  submitting,
  valid,
  ...props
}) => {
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

  return (
    <Form
      classes={{
        root: classNames(styles.Root, { [styles.RootIsComment]: isComment }),
        container: styles.Container
      }}
      onSubmit={handleSubmit}
    >
      <Emoji onSelect={handleEmojiSelect} />

      <Textarea id={textareaId} name="text" />

      <div className={styles.Right}>
        <Button
          color={isComment ? 'warning' : 'primary'}
          disabled={!dirty || !valid || submitting}
          icon={isComment ? 'fas fa-comment-alt-lines' : 'fas fa-paper-plane'}
          type="submit"
        />
      </div>
    </Form>
  );
};

export default reduxForm<any, any>({
  asyncValidate: asyncValidate(
    yup.object().shape({ text: yup.string().required() })
  ),
  form: SEND_MESSAGE_FORM,
  onSubmitSuccess: (value, dispatch, { reset }) => reset()
})(ChatSendForm);
