import { ApolloError, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';

// Fleetly
import { FieldType } from '@fleetly/core';

// Components
import Button from '@components/Button';
import {
  Actions,
  Error,
  Field,
  Fieldset,
  Select,
  gqlErrorHandler,
  yupValidator
} from '@components/Form';
import Link from '@components/Link';
import Modal from '@components/Modal';
import { Text } from '@components/Typography';

// Constants
import { CREATE_FIELD_MODAL } from '@constants';

// GraphQL
import CREATE_FIELD from './graphql/createField.gql';
import UPDATE_FIELD from './graphql/updateField.gql';

import GET_FIELD_LIST from '../Fields.gql';

// Interfaces
import { IFieldTypeOption } from '@interfaces/field.interface';

// Store
import { useModals } from '@store';

// Styles
import styles from './Create.scss';

export interface FieldsCreateFormValues {
  field: {
    description?: string;
    title: string;
    type?: FieldType;
  };
  fieldId?: string;
}

export interface FieldsCreateProps {
  fieldTypes: IFieldTypeOption[];
}

export const FieldsCreate: React.FC<FieldsCreateProps> = ({ fieldTypes }) => {
  // Setup
  const { closeModal } = useModals(CREATE_FIELD_MODAL);
  const { companyId } = useParams<{ companyId: string }>();

  // Mutations
  const [createField] = useMutation(CREATE_FIELD, {
    refetchQueries: [{ query: GET_FIELD_LIST, variables: { companyId } }]
  });

  const [updateField] = useMutation(UPDATE_FIELD, {
    refetchQueries: [{ query: GET_FIELD_LIST, variables: { companyId } }]
  });

  // Handlers
  const handleFormSubmit = useCallback(
    async (values) => {
      try {
        values.fieldId
          ? await updateField({ variables: values })
          : await createField({ variables: { ...values, companyId } });

        closeModal();
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [closeModal, companyId, createField, updateField]
  );

  return (
    <Modal id={CREATE_FIELD_MODAL} title="Create field">
      {(initialValues: any) => (
        <Form
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          validate={yupValidator(
            yup.object().shape({
              field: yup.object().shape({
                title: yup.string().required()
              })
            })
          )}
        >
          {({ handleSubmit, submitting }) => (
            <form className={styles.Root} onSubmit={handleSubmit}>
              {!initialValues.fieldId && (
                <div className={styles.Description}>
                  <Text component="div">
                    Store important information about your subscribers in
                    special fields.
                  </Text>

                  <Text
                    className={styles.Careful}
                    component="div"
                    weight="semiBold"
                  >
                    Be careful, the data type of the field cannot be changed!
                  </Text>
                </div>
              )}

              <Error />

              <Fieldset>
                <Field label="Title" name="field.title" placeholder="Name" />

                <Field
                  label="Description"
                  name="field.description"
                  placeholder="Description"
                />

                {!initialValues.fieldId && (
                  <Select
                    hint={<Link>About field types</Link>}
                    label="Type"
                    name="field.type"
                    options={fieldTypes}
                  />
                )}
              </Fieldset>

              <Actions>
                <Button
                  color="blue"
                  fullWidth
                  loaded={submitting}
                  type="submit"
                >
                  {initialValues.fieldId ? 'Update' : 'Create'}
                </Button>
              </Actions>
            </form>
          )}
        </Form>
      )}
    </Modal>
  );
};
