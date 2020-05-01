import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { object, string } from 'yup';

// Components
import Button from '@components/Button';
import Link from '@components/Link';
import Form, { asyncValidate, Fieldset, Input } from '@components/Form';

// Styles
import styles from './common.scss';

const SignIn: React.SFC<InjectedFormProps> = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Fieldset classes={{ root: styles.Fieldset }}>
      <Input label="Email" name="email" />
      <Input
        hint={<Link>Forgot password?</Link>}
        label="Password"
        name="password"
        type="password"
      />
    </Fieldset>

    <div className={styles.Actions}>
      <Button color="primary" type="submit">
        Sign In
      </Button>
    </div>
  </Form>
);

export default reduxForm({
  form: 'signInForm',
  asyncValidate: asyncValidate(
    object().shape({
      email: string().required(),
      password: string().required()
    })
  )
})(SignIn);
