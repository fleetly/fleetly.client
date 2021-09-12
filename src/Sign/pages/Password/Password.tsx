import { ApolloError, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { useHistory, useParams } from 'react-router';
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
import { H1, H2, Text } from '@components/Typography';

// GraphQL
import RECOVER from './Password.gql';

// Routes
import { SIGN_ROUTES } from '@sign/Sign.routes';

// Styles
import styles from '@sign/Sign.scss';

export interface SignPasswordFormValues {
  newPassword: string;
}

export const SignPassword: React.FC = () => {
  // Setup
  const { replace } = useHistory();
  const { token } = useParams<{ token: string }>();

  // Mutations
  const [recover] = useMutation(RECOVER);

  // Handlers
  const handleFormSubmit = useCallback(
    async ({ newPassword }: SignPasswordFormValues) => {
      try {
        await recover({
          variables: {
            newPassword,
            token
          }
        });

        replace(SIGN_ROUTES.IN);
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [recover, replace, token]
  );

  return (
    <Form
      onSubmit={handleFormSubmit}
      validate={yupValidator(
        yup.object().shape({
          confirmPassword: yup
            .string()
            .required()
            .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
          newPassword: yup.string().required()
        })
      )}
    >
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <H2 className={styles.Title}>Set New</H2>
          <H1 className={styles.Fleetly}>Password</H1>

          <Text className={styles.Description} component="div">
            Enter the email address with your account and we will send you a
            link to reset your password
          </Text>

          <Error />

          <Fieldset>
            <Field
              disabled={submitting}
              label="New password"
              name="newPassword"
              type="password"
            />

            <Field
              disabled={submitting}
              label="Confirm password"
              name="confirmPassword"
              type="password"
            />
          </Fieldset>

          <Actions>
            <Button color="blue" loaded={submitting} type="submit">
              Save password
            </Button>
          </Actions>
        </form>
      )}
    </Form>
  );
};
