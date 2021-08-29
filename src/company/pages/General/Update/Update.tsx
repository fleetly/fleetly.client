import React, { useCallback } from 'react';
import { Form } from 'react-final-form';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import Card from '@components/Card';
import {
  Actions,
  Error,
  Field,
  Fieldset,
  gqlErrorHandler,
  yupValidator
} from '@components/Form';

// Styles
import styles from './Update.scss';

export interface GeneralUpdateFormValues {
  location?: string;
  timezone?: string;
  title: string;
}

export const GeneralUpdate = () => {
  // Setup
  // const { createNotification } = useNotifications();

  // Data
  // const { data } = useQuery<{ user: IUser }>(GET_USER);

  // Mutations
  // const [updateProfile] = useMutation(UPDATE_PROFILE, {
  //   onCompleted: () =>
  //     createNotification({
  //       title: 'Profile saved successfully!',
  //       timeout: 5000,
  //       variant: 'success'
  //     })
  // });

  return (
    <Form onSubmit={console.log}>
      {({ handleSubmit, submitting, values }) => (
        <Card className={styles.Root}>
          <form>
            <Avatar
              alt={values.title}
              classes={{ root: styles.Avatar, plug: styles.AvatarPlug }}
            />

            <Error />

            <Fieldset>
              <Field label="Company Name" name="title" />
              <Field label="Location" name="location" />
              <Field label="Timezone" name="timezone" />
            </Fieldset>

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
