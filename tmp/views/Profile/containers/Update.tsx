import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

// Components
import Button from '@components/Button';
import Form, { Actions, Avatar, Fieldset, Input } from '@components/Form';
import { Wrapper } from '@components/Page';

// Constants
import { UPDATE_PROFILE_FORM } from '@constants';

// Styles
import styles from './Update.scss';

const ProfileUpdate: React.FC<InjectedFormProps<Profile.UpdateFormValues>> = ({
  error,
  handleSubmit,
  submitting
}) => (
  <Wrapper classes={{ container: styles.Root }} title="Profile">
    <Form classes={{ root: styles.Form }} error={error} onSubmit={handleSubmit}>
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
  </Wrapper>
);

export default reduxForm<Profile.UpdateFormValues>({
  form: UPDATE_PROFILE_FORM
})(ProfileUpdate);
