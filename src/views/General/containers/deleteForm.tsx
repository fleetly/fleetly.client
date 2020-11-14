import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

// Components
import Button from '@components/Button';
import Form from '@components/Form';

// Constants
import { DELETE_COMPANY_FORM } from '@constants';

const GeneralDeleteForm: React.FC<InjectedFormProps<General.UCNFormValues>> = ({
  error,
  handleSubmit,
  submitting
}) => (
  <Form error={error} onSubmit={handleSubmit}>
    <Button color="danger" loaded={submitting} type="submit" variant="outlined">
      Delete
    </Button>
  </Form>
);

export default reduxForm<any, any>({
  form: DELETE_COMPANY_FORM
})(GeneralDeleteForm);
