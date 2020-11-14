import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

// Components
import Button from '@components/Button';
import Form, { Actions } from '@components/Form';
import { Caption, H4, H5 } from '@components/Typography';

// Constants
import { DISABLE_COMPANY_FORM } from '@constants';

// Styles
import styles from './Form.scss';

const DisableForm: React.FC<InjectedFormProps> = ({
  error,
  handleSubmit,
  submitting
}) => {
  return (
    <Form classes={{ root: styles.Form }} error={error} onSubmit={handleSubmit}>
      <H5 className={styles.Title}>Disable</H5>
      <H4 className={styles.CompanyNameBlock}>Disable this company</H4>
      <Caption className={styles.Description}>
        All incoming information will no longer be processed.
      </Caption>
      <Actions>
        <Button
          color="danger"
          loaded={submitting}
          type="submit"
          variant="outlined"
        >
          Disable
        </Button>
      </Actions>
    </Form>
  );
};

export default reduxForm<any, any>({
  form: DISABLE_COMPANY_FORM
})(DisableForm);
