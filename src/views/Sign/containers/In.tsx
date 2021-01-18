import * as React from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { object, string } from 'yup';

// Components
import Button from '@components/Button';
import Link from '@components/Link';
import Form, {
  asyncValidate,
  gqlErrorHandler,
  Fieldset,
  Input
} from '@components/Form';

// GraphQL
import loginMutation from '@views/Sign/graphql/login.gql';

// Styles
import styles from './common.scss';

const SignIn: React.SFC<InjectedFormProps> = ({
  error,
  handleSubmit,
  submitting
}) => (
  <Form
    classes={{
      container: !error ? styles.Container : undefined,
      error: styles.Error
    }}
    error={error}
    onSubmit={handleSubmit}
  >
    <Fieldset classes={{ root: styles.Fieldset }}>
      <Input disabled={submitting} label="Email" name="email" />
      <Input
        disabled={submitting}
        hint={<Link>Forgot password?</Link>}
        label="Password"
        name="password"
        type="password"
      />
    </Fieldset>

    <div className={styles.Actions}>
      <Button color="primary" loaded={submitting} type="submit">
        Sign In
      </Button>
    </div>
  </Form>
);

export default compose<InjectedFormProps, any>(
  graphql(loginMutation),
  reduxForm({
    form: 'signInForm',
    asyncValidate: asyncValidate(
      object().shape({
        email: string().required(),
        password: string().required()
      })
    ),
    onSubmit: (variables, dispatch, { mutate }: any) =>
      mutate({ variables })
        .then(() => window.location.reload())
        .catch(gqlErrorHandler)
  })
)(SignIn);
