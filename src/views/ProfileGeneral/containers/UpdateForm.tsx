import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, {
  Actions,
  Avatar,
  asyncValidate,
  Fieldset,
  Input
} from '@components/Form';

// Constants
import { UPDATE_USER_INFO_FORM } from '@constants';

const ProfileGeneralUpdateForm: React.FC<InjectedFormProps<
  ProfileGeneral.UpdateFormValues
>> = ({ error, handleSubmit, submitting }) => (
  <Form error={error} onSubmit={handleSubmit}>
    <Fieldset>
      <Avatar alt="userName" label="Logo" name="logo" />

      <Input label="Firs Name" name="profile.firstname" />
      <Input label="Last Name" name="profile.lastname" />
      <Input label="User Name" name="username" />
    </Fieldset>

    <Actions>
      <Button color="primary" fullWidth loaded={submitting}>
        Save
      </Button>
    </Actions>
  </Form>
);

export default reduxForm<ProfileGeneral.UpdateFormValues>({
  asyncValidate: asyncValidate(
    yup.object().shape({
      firstname: yup.string(),
      username: yup.string().required(),
      lastname: yup.string()
    })
  ) as any,
  form: UPDATE_USER_INFO_FORM
})(ProfileGeneralUpdateForm);
