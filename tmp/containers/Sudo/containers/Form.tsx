import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

// Components
import Form, { Actions, Input } from '@components/Form';

// Constants
import { SUDO_FORM } from '@constants';
import Button from '@components/Button';

const SudoForm: React.FC<InjectedFormProps<any>> = ({
  error,
  handleSubmit,
  submitting
}) => (
  <Form error={error} onSubmit={handleSubmit}>
    <Input label="Password" name="password" type="password" />

    <Actions>
      <Button color="primary" fullWidth loaded={submitting} type="submit">
        Confirm
      </Button>
    </Actions>
  </Form>
);

export default reduxForm({ form: SUDO_FORM })(SudoForm);
