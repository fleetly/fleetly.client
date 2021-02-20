import React, { useCallback } from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
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
  const { onSubmit } = props as any;

  // Handlers
  const handleCommentClick = useCallback(
    handleSubmit(({ text }) => onSubmit(SubmitType.COMMENT, text, reset)),
    []
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
      <Button className={styles.Emoji} icon="far fa-smile" variant="outlined" />

      <Textarea name="text" />

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
