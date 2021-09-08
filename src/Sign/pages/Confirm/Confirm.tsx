import { ApolloError, useMutation } from '@apollo/client';
import React, { useCallback, useEffect, useState } from 'react';
import { Form } from 'react-final-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import {
  Actions,
  Error,
  gqlErrorHandler,
  yupValidator
} from '@components/Form';
import { H1, H2, H4, Text } from '@components/Typography';

import { SignConfirmCode } from './components/Code';

// GraphQL
import CONFIRM_EMAIL from './graphql/confirmEmail.gql';
import SEND_EMAIL_CODE from './graphql/sendEmailCode.gql';

// Store
import { useNotifications } from '@store';

// Styles
import styles from './Confirm.scss';

export interface SignConfirmFormValues {
  code: string;
}

export const SignConfirm: React.FC = () => {
  // Setup
  const DELAY = 20;
  const { createNotification, handleApolloError } = useNotifications();

  // State
  const [delay, setDelay] = useState<number>(DELAY);

  // Effects
  useEffect(() => {
    if (delay > 0) {
      setTimeout(() => setDelay(delay - 1), 1000);
    }
  }, [delay]);

  // Mutations
  const [confirmEmail] = useMutation(CONFIRM_EMAIL);
  const [sendEmailCode, { loading }] = useMutation(SEND_EMAIL_CODE, {
    onCompleted: () => {
      createNotification({
        description: 'We have sent you a verification code.',
        timeout: 5000,
        title: 'Check your mail!',
        variant: 'success'
      });

      setDelay(DELAY);
    },
    onError: handleApolloError
  });

  // Handlers
  const handleFormSubmit = useCallback(
    async ({ code }: SignConfirmFormValues) => {
      try {
        await confirmEmail({ variables: { code } });
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [confirmEmail]
  );

  const handleSendClick = useCallback(async () => {
    await sendEmailCode();
  }, [sendEmailCode]);

  return (
    <>
      <Form
        onSubmit={handleFormSubmit}
        validate={yupValidator(
          yup.object().shape({
            code: yup.string().required().matches(/^\d+$/).length(6)
          })
        )}
      >
        {({ handleSubmit, submitting, valid }) => (
          <form onSubmit={handleSubmit}>
            <H2 className={styles.Title}>Confirm Your</H2>
            <H1 className={styles.Fleetly}>E-mail</H1>

            <Text className={styles.Description} component="div">
              We emailed a confirmation code to:
              <br />
              <Text className={styles.Email} weight="semiBold">
                email
              </Text>
            </Text>

            <Error />

            <SignConfirmCode />

            <Actions>
              <Button
                color="blue"
                disabled={!valid}
                loaded={submitting}
                type="submit"
              >
                Confirm email
              </Button>
            </Actions>

            <div className={styles.Send}>
              <H4>Miss e-mail?</H4>

              <Text className={styles.SendDescription} component="div">
                It's okay, maybe it got lost in the{' '}
                <Text weight="bold">spam folder</Text>, or try:
              </Text>

              <Actions>
                <Button
                  color="dark"
                  disabled={!!delay}
                  icon={!delay ? 'far fa-undo' : undefined}
                  loaded={loading}
                  onClick={handleSendClick}
                >
                  {!!delay ? `Try in ${delay} seconds` : 'Send again'}
                </Button>
              </Actions>
            </div>
          </form>
        )}
      </Form>
    </>
  );
};
