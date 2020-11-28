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
import { SET_TOKEN_FORM } from '@constants';

const SetTokenForm: React.FC<InjectedFormProps<Channel.SetToken>> = ({
  error,
  handleSubmit,
  submitting
}) => {
  return (
    <Form error={error} onSubmit={handleSubmit}>
      <Fieldset>
        <Input name="newToken" placeholder="New Token" />
      </Fieldset>
      <Actions>
        <Button color="primary" fullWidth loaded={submitting} type="submit">
          Change
        </Button>
      </Actions>
    </Form>
  );
};

export default reduxForm<any, any>({
  asyncValidate: asyncValidate(
    yup.object().shape({ newToken: yup.string().required() })
  ),
  form: SET_TOKEN_FORM
})(SetTokenForm);
