import classNames from 'classnames';
import * as React from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { object, string } from 'yup';

// Components
import Button from '@components/Button';
import Form, {
  asyncValidate,
  gqlErrorHandler,
  Fieldset,
  Input
} from '@components/Form';
import Link from '@components/Link';
import { Text } from '@components/Typography';

// GraphQL
import registerMutation from '@views/Sign/graphql/register.gql';

// Styles
import styles from './common.scss';

const SignUp: React.FC<InjectedFormProps> = ({
  error,
  handleSubmit,
  submitting
}) => (
  <Form error={error} onSubmit={handleSubmit}>
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
    </Fieldset>

    <Text className={styles.Disclaimer} component="div" size="small">
      By creating an account, you agree to the{' '}
      <Link to="https://www.iubenda.com/terms-and-conditions/35742426">
        Terms of Service
      </Link>
    </Text>

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
