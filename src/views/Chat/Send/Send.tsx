import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, {
  asyncValidate,
  Actions,
  Fieldset,
  Input
} from '@components/Form';

// Constants
import { SEND_MESSAGE_CHAT_FORM } from '@constants';

// Styles
import styles from './Send.scss';

const ChatSendMessageForm: React.FC<InjectedFormProps<
  Chat.SendMessageForm
>> = ({ error, handleSubmit, submitting }) => (
  <Form
    classes={{ container: styles.Root }}
    error={error}
    onSubmit={handleSubmit}
  >
    <Actions classes={{ root: styles.Smile }}>
      <Button icon="fal fa-smile" variant="outlined" />
    </Actions>

    <textarea
      className={styles.Input}
      name="message"
      placeholder="Enter Message..."
    />

    <Actions classes={{ root: styles.Actions }}>
      <Button
        className={styles.Clip}
        icon="fal fa-paperclip"
        variant="outlined"
      />
      <Button
        className={styles.Send}
        icon="fas fa-paper-plane"
        variant="outlined"
      />
      <Button icon="fal fa-comment-alt-dots" variant="outlined" />
    </Actions>
  </Form>
);

export default reduxForm<any, any>({
  asyncValidate: asyncValidate(yup.object().shape({ message: yup.string() })),
  form: SEND_MESSAGE_CHAT_FORM
})(ChatSendMessageForm);
