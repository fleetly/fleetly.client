import { ApolloError, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { Form } from 'react-final-form';

// Components
import Button from '@components/Button';
import {
  Actions,
  Error,
  Field,
  Fieldset,
  gqlErrorHandler
} from '@components/Form';
import Link from '@components/Link';
import Modal from '@components/Modal';
import { Text } from '@components/Typography';

// Constants
import { SUDO_MODAL } from '@constants';

// GraphQL
import VERIFY_BY_PASSWORD from './Sudo.gql';

// Store
import { useModals } from '@store';

// Styles
import styles from './Sudo.scss';

export const Sudo: React.FC = () => {
  // Setup
  const { closeModal } = useModals(SUDO_MODAL);

  // Mutations
  const [verifyByPassword] = useMutation(VERIFY_BY_PASSWORD);

  // Handlers
  const handleFormSubmit = useCallback(
    async (variables) => {
      try {
        await verifyByPassword({ variables });
        closeModal();
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [closeModal, verifyByPassword]
  );

  return (
    <Modal id={SUDO_MODAL} title="Confirm password">
      <Form onSubmit={handleFormSubmit}>
        {({ handleSubmit, submitting }) => (
          <form className={styles.Root} onSubmit={handleSubmit}>
            <Text className={styles.Description} component="div">
              You are entering <Link to="#">sudo mode</Link>. We won't ask for
              your password again for a few hours.
            </Text>

            <Error />

            <Fieldset>
              <Field label="Password" name="password" type="password" />
            </Fieldset>

            <Actions>
              <Button
                color="primary"
                fullWidth
                loaded={submitting}
                type="submit"
              >
                Confirm
              </Button>
            </Actions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
