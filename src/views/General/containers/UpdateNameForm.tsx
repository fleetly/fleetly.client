import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, { asyncValidate, Input } from '@components/Form';

// Constants
import { UPDATE_COMPANY_NAME_FORM } from '@constants';

// Styles
import styles from './UpdateNameForm.scss';

const GeneralUpdateNameForm: React.FC<InjectedFormProps<
  General.UpdateNameFormValues
>> = ({ error, handleSubmit, submitting }) => (
  <Form error={error} onSubmit={handleSubmit}>
    <div className={styles.Fieldset}>
      <Input name="newName" placeholder="New name" />

      <Button
        color="danger"
        loaded={submitting}
        type="submit"
        variant="outlined"
      >
        Rename
      </Button>
    </div>
  </Form>
);

export default reduxForm<any, any>({
  asyncValidate: asyncValidate(
    yup.object().shape({ newName: yup.string().required() })
  ),
  form: UPDATE_COMPANY_NAME_FORM
})(GeneralUpdateNameForm);