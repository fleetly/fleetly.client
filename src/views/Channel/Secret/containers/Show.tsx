import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

// Components
import Button from '@components/Button';
import Form from '@components/Form';
import Modal from '@components/Modal';
import { P } from '@components/Typography';

// Constants
import { SHOW_CHANNEL_TOKEN_FORM, SHOW_CHANNEL_TOKEN_MODAL } from '@constants';

// Styles
import styles from './common.scss';

const ChannelSecretShow: React.FC<InjectedFormProps<any, any>> = ({
  error,
  handleSubmit,
  submitting
}) => (
  <Modal
    classes={{ container: styles.Container }}
    id={SHOW_CHANNEL_TOKEN_MODAL}
    title="Channel token"
  >
    <P className={styles.Careful}>
      <strong>Be careful!</strong> This is sensitive information, do not pass it
      on to third parties!
    </P>

    <Form error={error} onSubmit={handleSubmit}>
      <Button color="warning" fullWidth loaded={submitting} type="submit">
        Copy token and Close
      </Button>
    </Form>
  </Modal>
);

export default reduxForm({ form: SHOW_CHANNEL_TOKEN_FORM })(ChannelSecretShow);
