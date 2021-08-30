import { ApolloError, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';

// Fleetly
import { ChannelSource } from '@fleetly/provider/interfaces';

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

import { ChannelsAddSource } from './components/Source';

// Constants
import { ADD_CHANNEL_MODAL } from '@constants';

// Data
import { SOURCES } from './Add.data';

// GraphQL
import CREATE_CHANNEL from './Add.gql';

// Styles
import styles from './Add.scss';

export interface ChannelAddFormValues {
  sourceType: ChannelSource;
  token: string;
}

export const ChannelAdd: React.FC = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();

  // Mutations
  const [createChannel] = useMutation(CREATE_CHANNEL);

  // Handlers
  const handleFormSubmit = useCallback(
    async ({ sourceType, token }: ChannelAddFormValues) => {
      try {
        await createChannel({ variables: { companyId, sourceType, token } });
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [companyId, createChannel]
  );

  return (
    <Modal id={ADD_CHANNEL_MODAL} title="Add channel">
      <Form
        onSubmit={handleFormSubmit}
        validate={yupValidator(
          yup.object().shape({ token: yup.string().required() })
        )}
      >
        {({ handleSubmit, submitting }) => (
          <form className={styles.Root} onSubmit={handleSubmit}>
            <Error />

            <Fieldset>
              {/* <SourceType name="sourceType" /> */}
              <ChannelsAddSource name="sourceType" sources={SOURCES} />
              <Field name="token" placeholder="Token" />
            </Fieldset>

            <Actions>
              <Button
                color="primary"
                fullWidth
                loaded={submitting}
                type="submit"
              >
                Add Channel
              </Button>
            </Actions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
