import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, { asyncValidate, Fieldset, Input } from '@components/Form';

import SourceType from '../components/SourceType';

// Constants
import { ADD_CHANNEL_FORM } from '@constants';

// Styles
import styles from './Form.scss';

const ChannelsForm: React.FC<InjectedFormProps<Channels.FormValues>> = ({
  error,
  handleSubmit,
  submitting
}) => (
  <Form error={error} onSubmit={handleSubmit}>
    <Fieldset classes={{ root: styles.Fieldset }}>
      <SourceType name="sourceType" />
      <Input name="token" placeholder="Token" />
    </Fieldset>

    <div className={styles.Actions}>
      <Button color="primary" fullWidth loaded={submitting} type="submit">
        Add Channel
      </Button>
    </div>
  </Form>
);

export default reduxForm<any, any>({
  asyncValidate: asyncValidate(
    yup.object().shape({ token: yup.string().required() })
  ),
  form: ADD_CHANNEL_FORM
})(ChannelsForm);
