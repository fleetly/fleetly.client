import { ApolloError, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { useParams } from 'react-router-dom';
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
import Link from '@components/Link';
import Modal from '@components/Modal';
import { Text } from '@components/Typography';

// Constants
import { SET_CHANNEL_TOKEN_MODAL } from '@constants';

// GraphQL
import SET_CHANNEL_TOKEN from './Token.gql';

// Store
import { useModals } from '@store';

// Styles
import styles from './Token.scss';

export interface ChannelSecretTokenFormValues {
  newToken: string;
}

export const ChannelSecretToken: React.FC = () => {
  // Setup
  const { closeModal } = useModals(SET_CHANNEL_TOKEN_MODAL);
  const { channelId } = useParams<{ channelId: string }>();

  // Mutations
  const [setChannelToken] = useMutation(SET_CHANNEL_TOKEN);

  // Handlers
  const handleFormSubmit = useCallback(
    async ({ newToken }: ChannelSecretTokenFormValues) => {
      try {
        await setChannelToken({ variables: { channelId, newToken } });
        closeModal();
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [channelId, closeModal, setChannelToken]
  );

  return (
    <Modal
      classes={{ container: styles.Container }}
      id={SET_CHANNEL_TOKEN_MODAL}
      title="Set channel token"
    >
      <Form
        onSubmit={handleFormSubmit}
        validate={yupValidator(
          yup.object().shape({ newToken: yup.string().required() })
        )}
      >
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Text className={styles.Description} component="div">
              You can set a new token for the current channel.{' '}
              <Link to="/">Where can I get a new token?</Link>
            </Text>

            <Error />

            <Fieldset>
              <Field
                label="Token"
                name="newToken"
                placeholder="Many letters..."
              />
            </Fieldset>

            <Actions>
              <Button
                color="primary"
                fullWidth
                loaded={submitting}
                type="submit"
              >
                Set Token
              </Button>
            </Actions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
