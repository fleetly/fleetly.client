import { ApolloError, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import {
  Actions,
  Error,
  Field,
  Fieldset,
  gqlErrorHandler,
  yupValidator
} from '@components/Form';
import Link from '@components/Link';
import { H1, H2, Text } from '@components/Typography';

// GraphQL
import SIGN_IN from './In.gql';

// Interfaces
import { IUser } from '@interfaces/user.interface';

// Routes
import { SIGN_ROUTES } from '@sign/Sign.routes';

// Store
import { useSession } from '@store';

// Styles
import styles from '@sign/Sign.scss';

export const SignIn: React.FC = () => {
  // Setup
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { login } = useSession();

  // Mutations
  const [signIn] = useMutation<{ login: IUser }>(SIGN_IN);

  // Handlers
  const handleFormSubmit = useCallback(
    async (variables) => {
      try {
        const token = await executeRecaptcha!('login');

        const { data } = await signIn({
          context: { headers: { recaptcha: token } },
          variables
        });

        login(data?.login!);
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [executeRecaptcha, login, signIn]
  );

  return (
    <Form
      onSubmit={handleFormSubmit}
      validate={yupValidator(
        yup.object().shape({
          email: yup.string().required(),
          password: yup.string().required()
        })
      )}
    >
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <H2 className={styles.Title}>Sign In</H2>
          <H1 className={styles.Fleetly}>Fleetly</H1>

          <Text className={styles.Description} component="div">
            New user? <Link to={SIGN_ROUTES.UP}>Create an account</Link>
          </Text>

          <Error />

          <Fieldset>
            <Field disabled={submitting} label="Email" name="email" />

            <Field
              disabled={submitting}
              hint={<Link to={SIGN_ROUTES.RECOVERY}>Forgot password?</Link>}
              label="Password"
              name="password"
              type="password"
            />
          </Fieldset>

          <Actions>
            <Button color="blue" loaded={submitting} type="submit">
              Sign In
            </Button>
          </Actions>
        </form>
      )}
    </Form>
  );
};
