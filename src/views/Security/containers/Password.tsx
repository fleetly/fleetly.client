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
import { Wrapper } from '@components/Page';

// Constants
import { UPDATE_PASSWORD_FORM } from '@constants';

// Styles
import styles from './Password.scss';

const SecurityUpdatePassword: React.FC<InjectedFormProps<
  Security.PasswordFormValues
>> = ({ error, handleSubmit, submitting }) => (
  <Wrapper classes={{ container: styles.Root }} title="Change password">
    <Form
      classes={{ container: styles.Container }}
      error={error}
      onSubmit={handleSubmit}
    >
      <Fieldset>
        <Input
          label="Current Password"
          name="oldPassword"
          placeholder="Enter Current Password"
          type="password"
        />
        <Input
          label="New Password"
          name="newPassword"
          placeholder="Enter New Password"
          type="password"
        />
        <Input
          label="Confirm New Password"
          name="confirmNewPassword"
          placeholder="Enter New Password"
          type="password"
        />
      </Fieldset>

      <Actions>
        <Button color="primary" fullWidth loaded={submitting} type="submit">
          Save
        </Button>
      </Actions>
    </Form>
  </Wrapper>
);

export default reduxForm<any, any>({
  asyncValidate: asyncValidate(
    yup.object().shape({
      oldPassword: yup.string().required(),
      newPassword: yup.string().required(),
      confirmNewPassword: yup
        .string()
        .required()
        .oneOf([yup.ref('newPassword')], 'Passwords must match')
    })
  ),
  form: UPDATE_PASSWORD_FORM
})(SecurityUpdatePassword);
