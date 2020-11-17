import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

// Components
import Button from '@components/Button';
import Form, { Actions, Avatar, Fieldset, Input } from '@components/Form';

// Constants
import { UPDATE_PROFILE_FORM } from '@constants';

// Styles
import styles from './Form.scss';

const ProfileGeneralForm: React.FC<InjectedFormProps<
  ProfileGeneral.FormValues
>> = ({ error, handleSubmit, submitting }) => (
  <Form classes={{ root: styles.Root }} error={error} onSubmit={handleSubmit}>
    <Fieldset>
      <Avatar alt="userName" label="Logo" name="logo" />
      <Input label="Firsname" name="firstname" />
      <Input label="Lastname" name="lastname" />
      <Input label="Username" name="username" />
    </Fieldset>

    <Actions>
      <Button color="primary" fullWidth loaded={submitting} type="submit">
        Save
      </Button>
    </Actions>
  </Form>
);

export default reduxForm<ProfileGeneral.FormValues>({
  form: UPDATE_PROFILE_FORM
})(ProfileGeneralForm);
