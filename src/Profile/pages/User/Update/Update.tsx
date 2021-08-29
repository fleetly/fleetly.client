import { ApolloError, useMutation, useQuery } from '@apollo/client';
import React, { useCallback, useState } from 'react';
import { Form, FormSpy } from 'react-final-form';
import * as yup from 'yup';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import Card, { CardHr } from '@components/Card';
import {
  Actions,
  Error,
  Field,
  Fieldset,
  gqlErrorHandler,
  yupValidator
} from '@components/Form';
import { H4 } from '@components/Typography';

// GraphQL
import GET_USER from './graphql/getUser.gql';
import UPDATE_PROFILE from './graphql/updateProfile.gql';

// Interfaces
import { IUser } from '@interfaces/user.interface';

// Store
import { useNotifications } from '@store';

// Styles
import styles from './Update.scss';

export interface ProfileUserUpdateFormValues {
  firstname: string;
  lastname: string;
  job?: string;
  location?: string;
  timezone?: string;
}

export const ProfileUserUpdate: React.FC = () => {
  // Setup
  const { createNotification } = useNotifications();

  // State
  const [fullname, setFullname] = useState<string>('');

  // Data
  const { data } = useQuery<{ user: IUser }>(GET_USER);

  // Mutations
  const [updateProfile] = useMutation(UPDATE_PROFILE, {
    onCompleted: () =>
      createNotification({
        title: 'Profile saved successfully!',
        timeout: 5000,
        variant: 'success'
      })
  });

  // Handlers
  const handleFormChange = useCallback(
    ({ values }: { values: ProfileUserUpdateFormValues }) => {
      setFullname(`${values.firstname || ''} ${values.lastname || ''}`);
    },
    []
  );

  const handleFormSubmit = useCallback(
    async (values: ProfileUserUpdateFormValues) => {
      try {
        await updateProfile({ variables: values });
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [updateProfile]
  );

  return (
    <Form
      initialValues={{
        firstname: data?.user.firstname,
        lastname: data?.user.lastname,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        username: data?.user.username
      }}
      onSubmit={handleFormSubmit}
      validate={yupValidator(
        yup.object().shape({
          firstname: yup.string().required(),
          lastname: yup.string().required(),
          username: yup.string().required()
        })
      )}
    >
      {({ handleSubmit, submitting }) => (
        <Card className={styles.Root}>
          <form onSubmit={handleSubmit}>
            <FormSpy
              onChange={handleFormChange}
              subscription={{ values: true }}
            />

            <Avatar
              alt={fullname}
              classes={{ root: styles.Avatar, plug: styles.AvatarPlug }}
            />

            <Error />

            <Fieldset>
              <Field label="First Name" name="firstname" />
              <Field label="Last Name" name="lastname" />
              <Field label="Username" name="username" />
            </Fieldset>

            <CardHr className={styles.Hr} />

            <H4 className={styles.Title}>Job</H4>

            <Fieldset>
              <Field label="Job Title" name="job" />
              <Field label="Location" name="location" />
              <Field label="Timezone" name="timezone" />
            </Fieldset>

            <CardHr className={styles.Hr} />

            <Actions>
              <Button
                color="primary"
                fullWidth
                loaded={submitting}
                type="submit"
              >
                Save
              </Button>
            </Actions>
          </form>
        </Card>
      )}
    </Form>
  );
};
