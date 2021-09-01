import { ApolloError, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
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
import { Wrapper } from '@components/Page';

// GraphQL
import UPDATE_PASSWORD from './Password.gql';

// Store
import { useNotifications } from '@store';

// Styles
import styles from './Password.scss';

export interface SecurityPasswordFormValues {
  newPassword: string;
  oldPassword: string;
}

export const SecurityPassword: React.FC = () => {
  // Setup
  const { createNotification } = useNotifications();

  // Mutations
  const [updatePassword] = useMutation(UPDATE_PASSWORD, {
    onCompleted: () =>
      createNotification({
        title: 'Password changed successfully!',
        timeout: 5000,
        variant: 'success'
      })
  });

  // Handlers
  const handleFormSubmit = useCallback(
    async (
      { newPassword, oldPassword }: SecurityPasswordFormValues,
      { restart }
    ) => {
      try {
        await updatePassword({ variables: { newPassword, oldPassword } });
        restart();
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [updatePassword]
  );

  return (
    <Wrapper classes={{ container: styles.Container }} title="Change password">
      <Form
        onSubmit={handleFormSubmit}
        validate={yupValidator(
          yup.object().shape({
            oldPassword: yup.string().required(),
            newPassword: yup.string().required(),
            confirmNewPassword: yup
              .string()
              .required()
              .oneOf([yup.ref('newPassword')], 'Passwords must match')
          })
        )}
      >
        {({ handleSubmit, submitting, valid }) => (
          <form className={styles.Root} onSubmit={handleSubmit}>
            <Error />

            <Fieldset>
              <Field
                disabled={submitting}
                label="Current Password"
                name="oldPassword"
                placeholder="Enter Current Password"
                type="password"
              />

              <Field
                disabled={submitting}
                label="New Password"
                name="newPassword"
                placeholder="Enter New Password"
                type="password"
              />

              <Field
                disabled={submitting}
                label="Confirm New Password"
                name="confirmNewPassword"
                placeholder="Enter New Password"
                type="password"
              />
            </Fieldset>

            <Actions>
              <Button
                color="blue"
                disabled={!valid}
                fullWidth
                loaded={submitting}
                type="submit"
              >
                Save
              </Button>
            </Actions>
          </form>
        )}
      </Form>
    </Wrapper>
  );
};
