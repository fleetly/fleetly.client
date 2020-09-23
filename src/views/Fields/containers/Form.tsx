import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, { asyncValidate, Fieldset, Input } from '@components/Form';
import { P } from '@components/Typography';

// Data
import { FIELDS_FORM } from '../data';

// Infrastructures
import { IField } from '@interfaces/field.interface';

// Styles
import styles from './Form.scss';

const FieldsForm: React.FunctionComponent<InjectedFormProps<
  IField,
  {},
  string
>> = ({ error, handleSubmit, initialValues, submitting }) => {
  const isEditMode = initialValues?.id;

  return (
    <Form
      classes={{ container: styles.Root }}
      error={error}
      onSubmit={handleSubmit}
    >
      {!isEditMode && (
        <P className={styles.Description} component="div">
          Be careful, the wrong key can stop the channel.
        </P>
      )}

      <Fieldset classes={{ root: styles.Fieldset }}>
        <Input name="title" placeholder="Name" />
        <Input name="description" placeholder="Description" />
      </Fieldset>

      <div className={styles.Actions}>
        <Button color="primary" fullWidth loaded={submitting} type="submit">
          {isEditMode ? 'Save' : 'Create'}
        </Button>
      </div>
    </Form>
  );
};

export default reduxForm<any, any>({
  asyncValidate: asyncValidate(
    yup.object().shape({ title: yup.string().required() })
  ),
  form: FIELDS_FORM
})(FieldsForm);
