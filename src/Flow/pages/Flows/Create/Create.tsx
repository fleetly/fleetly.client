import { ApolloError, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';

// API
import { CREATE_FLOW, GET_FLOWS, UPDATE_FLOW } from '@flow/Flow.gql';

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
import Modal from '@components/Modal';

// Hooks
import { useFlowsCreate } from './Create.hooks';

// Interfaces
import { Flow } from '@flow/interfaces/flow.interface';

export const FlowsCreate: React.FC = () => {
  // Setup
  const { modal } = useFlowsCreate();
  const { companyId } = useParams<{ companyId: string }>();

  // API
  const refetchQueries = [{ query: GET_FLOWS, variables: { companyId } }];

  const [createFlow] = useMutation(CREATE_FLOW, { refetchQueries });
  const [updateFlow] = useMutation(UPDATE_FLOW, { refetchQueries });

  // Handlers
  const handleFormSubmit = useCallback(
    async ({ id, title }) => {
      try {
        id
          ? await updateFlow({ variables: { flowId: id, flow: { title } } })
          : await createFlow({ variables: { companyId, flow: { title } } });

        modal.closeModal();
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [companyId, createFlow, modal, updateFlow]
  );

  return (
    <Modal id={modal.id!} title="Create a Flow">
      {(initialValues: Flow) => (
        <Form
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          validate={yupValidator(
            yup.object().shape({
              title: yup.string().required()
            })
          )}
        >
          {({ handleSubmit, initialValues, submitting }) => (
            <form onSubmit={handleSubmit}>
              <Error />

              <Fieldset>
                <Field label="Flow title" name="title" />
              </Fieldset>

              <Actions>
                <Button color="blue" loaded={submitting} type="submit">
                  {initialValues.id ? 'Update' : 'Create'}
                </Button>
              </Actions>
            </form>
          )}
        </Form>
      )}
    </Modal>
  );
};
