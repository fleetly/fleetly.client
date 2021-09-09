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
import { H1, H2, Text } from '@components/Typography';

// GraphQL
import UPDATE_PROFILE from './Profile.gql';

// Interfaces
import { IUser } from '@interfaces/user.interface';

// Store
import { useSession } from '@store';

// Styles
import styles from '@sign/Sign.scss';

export interface SignProfileFormValues {
  firstname: string;
  lastname: string;
  username: string;
}

export const SignProfile: React.FC = () => {
  // Setup
  const { setUser } = useSession();

  // Mutations
  const [updateProfile] = useMutation<{ updateProfile: IUser }>(UPDATE_PROFILE);

  // Handlers
  const handleFormSubmit = useCallback(
    async (variables: SignProfileFormValues) => {
      try {
        const { data } = await updateProfile({ variables });
        setUser(data?.updateProfile!);
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [setUser, updateProfile]
  );

  return (
    <Form
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
        <form onSubmit={handleSubmit}>
          <H2 className={styles.Title}>Glad To</H2>
          <H1 className={styles.Fleetly}>Meet You</H1>

          <Text className={styles.Description} component="div">
            My name is Fleetly, and yours?
          </Text>

          <Error />

          <Fieldset>
            <Field disabled={submitting} label="First name" name="firstname" />
            <Field disabled={submitting} label="Last name" name="lastname" />
            <Field disabled={submitting} label="Username" name="username" />
          </Fieldset>

          <Actions>
            <Button color="blue" loaded={submitting} type="submit">
              Let's rock!
            </Button>
          </Actions>
        </form>
      )}
    </Form>
  );
};
