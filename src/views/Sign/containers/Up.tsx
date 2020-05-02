import classNames from 'classnames';
import * as React from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { object, ref, string } from 'yup';

// Components
import Button from '@components/Button';
import Form, {
  asyncValidate,
  gqlErrorHandler,
  Fieldset,
  Input
} from '@components/Form';

// GraphQL
import registerMutation from '@views/Sign/graphql/register.gql';

// Styles
import styles from './common.scss';

const SignUp: React.SFC<InjectedFormProps> = ({
  error,
  handleSubmit,
  submitting
}) => (
  <Form classes={{ error: styles.Error }} error={error} onSubmit={handleSubmit}>
    <Fieldset
      classes={{ root: classNames(styles.Fieldset, styles.FieldsetMultiple) }}
    >
      <Input disabled={submitting} label="Email" name="email" />
      <Input disabled={submitting} label="Username" name="username" />
      <Input
        disabled={submitting}
        label="Password"
        name="password"
        type="password"
      />

      <Input
        disabled={submitting}
        label="Confirm password"
        name="confirmation"
        type="password"
      />
    </Fieldset>

    <div className={styles.Actions}>
      <Button color="primary" loaded={submitting} type="submit">
        Sign Up
      </Button>
    </div>
  </Form>
);

export default compose<InjectedFormProps, any>(
  graphql(registerMutation),
  reduxForm({
    form: 'signUpForm',
    asyncValidate: asyncValidate(
      object().shape({
        email: string().required(),
        confirmation: string()
          .required()
          .oneOf([ref('password')], 'Passwords must match'),
        password: string().required(),
        username: string().required()
      })
    ),
    onSubmit: (
      { passwordConfirmation, ...variables }: any,
      dispatch,
      { mutate }: any
    ) => mutate({ variables }).catch(gqlErrorHandler)
  })
)(SignUp);
