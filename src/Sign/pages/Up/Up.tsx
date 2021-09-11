import { ApolloError, useMutation } from '@apollo/client';
import React, { useCallback, useState } from 'react';
import { Form } from 'react-final-form';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
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
import SIGN_UP from './Up.gql';

// Interfaces
import { IUser } from '@interfaces/user.interface';

// Routes
import { SIGN_ROUTES } from '@sign/Sign.routes';

// Store
import { useSession } from '@store';

// Styles
import styles from './Up.scss';

export const SignUp: React.FC = () => {
  // Setup
  const { login } = useSession();

  // State
  const [token, setToken] = useState<string>();

  // Mutations
  const [signUp] = useMutation<{ register: IUser }>(SIGN_UP);

  const handleFormSubmit = useCallback(
    async (variables) => {
      try {
        const { data } = await signUp({
          context: { headers: { recaptcha: token } },
          variables
        });
        login(data?.register!);
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [login, signUp, token]
  );

  return (
    <Form
      onSubmit={handleFormSubmit}
      validate={yupValidator(
        yup.object().shape({
          email: yup.string().required(),
          confirmPassword: yup
            .string()
            .required()
            .oneOf([yup.ref('password'), null], 'Passwords must match'),
          password: yup.string().required()
        })
      )}
    >
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <H2 className={styles.Title}>Welcome to</H2>
          <H1 className={styles.Fleetly}>Fleetly</H1>

          <Text className={styles.Description} component="div">
            Already a user? <Link to={SIGN_ROUTES.IN}>Login now</Link>
          </Text>

          <Error />

          <Fieldset>
            <Field disabled={submitting} label="Email" name="email" />

            <Field
              disabled={submitting}
              label="Password"
              name="password"
              type="password"
            />

            <Field
              disabled={submitting}
              label="Confirm password"
              name="confirmPassword"
              type="password"
            />
          </Fieldset>

          <GoogleReCaptcha onVerify={setToken} />

          <Actions>
            <Button
              color="blue"
              disabled={!token}
              loaded={submitting}
              type="submit"
            >
              Sign Up
            </Button>
          </Actions>

          <Text className={styles.Disclaimer} component="div" size="small">
            By creating an account, you agree to the{' '}
            <Link to="https://app.termly.io/document/terms-of-use-for-website/39452092-d91a-4396-9ec4-e207df253d0c">
              Terms of Service
            </Link>
          </Text>
        </form>
      )}
    </Form>
  );
};
