import { ApolloError, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import {
  Actions,
  Error,
  Field,
  gqlErrorHandler,
  yupValidator
} from '@components/Form';
import { H1, H2, Text } from '@components/Typography';

// GraphQL
import CREATE_RECOVERY from './Recovery.gql';

// Routes
import { SIGN_ROUTES } from '@sign/Sign.routes';

// Styles
import styles from '@sign/Sign.scss';

export const SignRecovery: React.FC = () => {
  // Setup
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { replace } = useHistory();

  // Mutations
  const [createRecovery] = useMutation(CREATE_RECOVERY);

  // Handlers
  const handleFormSubmit = useCallback(
    async (variables) => {
      try {
        const token = await executeRecaptcha!('login');

        await createRecovery({
          context: { headers: { recaptcha: token } },
          variables
        });

        replace(SIGN_ROUTES.RECOVERY_SUCCESS);
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [createRecovery, executeRecaptcha, replace]
  );

  return (
    <Form
      onSubmit={handleFormSubmit}
      validate={yupValidator(
        yup.object().shape({
          email: yup.string().required().email()
        })
      )}
    >
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <H2 className={styles.Title}>Recovery</H2>
          <H1 className={styles.Fleetly}>Password</H1>

          <Text className={styles.Description} component="div">
            Enter the email address with your account and we will send you a
            link to reset your password
          </Text>

          <Error />

          <Field disabled={submitting} label="Email" name="email" />

          <Actions>
            <Button color="blue" loaded={submitting} type="submit">
              Send Email
            </Button>
          </Actions>
        </form>
      )}
    </Form>
  );
};
