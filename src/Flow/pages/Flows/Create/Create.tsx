import { ApolloError, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';

// API
import { CREATE_FLOW, GET_FLOWS } from '@flow/Flow.gql';

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

export const FlowsCreate: React.FC = () => {
  // Setup
  const { modal } = useFlowsCreate();
  const { companyId } = useParams<{ companyId: string }>();

  // API
  const [createFlow] = useMutation(CREATE_FLOW, {
    refetchQueries: [{ query: GET_FLOWS, variables: { companyId } }]
  });

  // Handlers
  const handleFormSubmit = useCallback(
    async (flow) => {
      try {
        await createFlow({ variables: { companyId, flow } });
        modal.closeModal();
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [companyId, createFlow, modal]
  );

  return (
    <Modal id={modal.id!} title="Create a Flow">
      <Form
        onSubmit={handleFormSubmit}
        validate={yupValidator(
          yup.object().shape({
            title: yup.string().required()
          })
        )}
      >
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Error />

            <Fieldset>
              <Field label="Flow title" name="title" />
            </Fieldset>

            <Actions>
              <Button color="blue" loaded={submitting} type="submit">
                Create
              </Button>
            </Actions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
