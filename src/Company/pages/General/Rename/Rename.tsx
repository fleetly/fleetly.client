import { ApolloError, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { useParams } from 'react-router';
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
import { H3, Text } from '@components/Typography';

// GraphQL
import RENAME_COMPANY from './Rename.gql';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

// Store
import { useNotifications } from '@store';

// Styles
import styles from '../General.scss';

export const GeneralRename: React.FC<ICompany> = ({ name }) => {
  // Setup
  const { createNotification } = useNotifications();
  const { companyId } = useParams<{ companyId: string }>();

  // Mutations
  const [renameCompany] = useMutation(RENAME_COMPANY, {
    onCompleted: () =>
      createNotification({
        description: 'Company domain has been changed!',
        timeout: 5000,
        title: 'Successfully!',
        variant: 'success'
      })
  });

  // Handlers
  const handleFormSubmit = useCallback(
    async ({ newName }) => {
      try {
        await renameCompany({ variables: { companyId, newName } });
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [companyId, renameCompany]
  );

  return (
    <Form
      initialValues={{ newName: name }}
      onSubmit={handleFormSubmit}
      validate={yupValidator(
        yup.object().shape({ newName: yup.string().required() })
      )}
    >
      {({ handleSubmit, submitting }) => (
        <form className={styles.Form} onSubmit={handleSubmit}>
          <div className={styles.Content}>
            <H3>
              Change domain{' '}
              <span className={styles.Blue}>«{name}.fleetly.it»</span>
            </H3>

            <Text className={styles.Description} component="div">
              Changing your company domain can have unintended side effects.
            </Text>
          </div>

          <Error className={styles.Error} />

          <Actions className={styles.Rename}>
            <Field name="newName" placeholder="New name" post=".fleetly.it" />

            <Button
              color="red"
              loaded={submitting}
              type="submit"
              variant="outlined"
            >
              Rename
            </Button>
          </Actions>
        </form>
      )}
    </Form>
  );
};
