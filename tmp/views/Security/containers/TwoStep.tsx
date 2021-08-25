import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

// Components
import Button from '@components/Button';
import Form from '@components/Form';
import { Wrapper } from '@components/Page';
import { P, H4, H5 } from '@components/Typography';

// Constants
import { TWO_STEP_VERIFICATION_FORM } from '@constants';

// Styles
import styles from './TwoStep.scss';

const ProfileSecurityVerificationForm: React.FC<InjectedFormProps> = ({
  error,
  handleSubmit,
  submitting
}) => (
  <Wrapper classes={{ container: styles.Root }} title="Two-Step Verification">
    <div>
      <div className={styles.Content}>
        <H5 className={styles.Label}>Verification</H5>
        <H4 className={styles.Title}>
          Two-Step verification is not enabled yet
        </H4>
        <P className={styles.Description}>
          Two-Step verification adds and an additional layer of security to your
          account by requiring more than just a password to Log In.
        </P>
      </div>

      <Form
        classes={{ root: styles.Form }}
        error={error}
        onSubmit={handleSubmit}
      >
        <Button
          color="primary"
          loaded={submitting}
          type="submit"
          variant="outlined"
        >
          Enable
        </Button>
      </Form>
    </div>
  </Wrapper>
);

export default reduxForm<any, any>({
  form: TWO_STEP_VERIFICATION_FORM
})(ProfileSecurityVerificationForm);
