import * as React from 'react';
import { useMutation } from 'react-apollo';

// Components
import { gqlErrorHandler } from '@components/Form';
import Link from '@components/Link';
import Modal from '@components/Modal';

// Constants
import { SUDO_MODAL } from '@constants';

// Containers
import Form from './containers/Form';
import { P } from '@components/Typography';

// GraphQL
import VERIFY_BY_PASSWORD from './graphql/verifyByPassword.gql';

// Styles
import styles from './Sudo.scss';

const Sudo = () => {
  // Mutations
  const [verifyByPassword] = useMutation(VERIFY_BY_PASSWORD);

  // Handlers
  const handleSubmit = React.useCallback(
    async ({ password }) => {
      try {
        return await verifyByPassword({ variables: { password } });
      } catch (error) {
        return gqlErrorHandler(error);
      }
    },
    [verifyByPassword]
  );

  return (
    <Modal
      classes={{ container: styles.Root }}
      id={SUDO_MODAL}
      title="Confirm password"
    >
      {({ onSubmitSuccess }: any) => (
        <>
          <P className={styles.Description}>
            You are entering <Link to="#">sudo mode</Link>. We won't ask for
            your password again for a few hours.
          </P>

          <Form onSubmit={handleSubmit} onSubmitSuccess={onSubmitSuccess} />
        </>
      )}
    </Modal>
  );
};

export default Sudo;
