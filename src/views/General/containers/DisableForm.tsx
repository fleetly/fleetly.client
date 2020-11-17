import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

// Components
import Button from '@components/Button';
import Form from '@components/Form';

// Constants
import { DISABLE_COMPANY_FORM } from '@constants';

const GeneralDisableForm: React.FC<InjectedFormProps<{}>> = ({
  error,
  handleSubmit,
  submitting
}) => (
  <Form error={error} onSubmit={handleSubmit}>
    <Button color="danger" loaded={submitting} type="submit" variant="outlined">
      Disable
    </Button>
  </Form>
);

export default reduxForm<any, any>({
  form: DISABLE_COMPANY_FORM
})(GeneralDisableForm);
