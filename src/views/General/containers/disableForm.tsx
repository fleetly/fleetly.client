import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

// Components
import Button from '@components/Button';
import Form, { Actions } from '@components/Form';

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
