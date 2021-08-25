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

import SourceType from './components/SourceType';

// Constants
import { ADD_CHANNEL_FORM } from '@constants';

const ChannelsAddForm: React.FC<InjectedFormProps<Channels.AddFormValues>> = ({
  error,
  handleSubmit,
  submitting
}) => (
  <Form error={error} onSubmit={handleSubmit}>
    <Fieldset>
      <SourceType name="sourceType" />
      <Input name="token" placeholder="Token" />
    </Fieldset>

    <Actions>
      <Button color="primary" fullWidth loaded={submitting} type="submit">
        Add Channel
      </Button>
    </Actions>
  </Form>
);

export default reduxForm<any, any>({
  asyncValidate: asyncValidate(
    yup.object().shape({ token: yup.string().required() })
  ),
  form: ADD_CHANNEL_FORM
})(ChannelsAddForm);
