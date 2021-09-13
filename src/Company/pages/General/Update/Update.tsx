import React from 'react';
import { Form } from 'react-final-form';

// Components
import Button from '@components/Button';
import { Actions, Error, Field, Fieldset } from '@components/Form';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

export interface GeneralUpdateFormValues {
  location?: string;
  timezone?: string;
  title: string;
}

export const GeneralUpdate: React.FC<ICompany> = (initialValues) => {
  // // Setup
  // const { createNotification } = useNotifications();

  // // Mutations
  // const [updateProfile] = useMutation(UPDATE_PROFILE, {
  //   onCompleted: () =>
  //     createNotification({
  //       title: 'Profile saved successfully!',
  //       timeout: 5000,
  //       variant: 'success'
  //     })
  // });

  // const handleFormSubmit = useCallback(async () => {
  //   return true;
  // }, []);

  return (
    <Form initialValues={initialValues} onSubmit={window.location.reload}>
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Error />

          <Fieldset>
            <Field label="Company Name" name="title" />
            <Field label="Location" name="location" />
            <Field label="Timezone" name="timezone" />
          </Fieldset>

          <Actions>
            <Button
              color="blue"
              disabled
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
  );
};
