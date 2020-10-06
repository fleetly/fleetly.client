import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, { asyncValidate, Fieldset, Input, Select } from '@components/Form';
import { P } from '@components/Typography';

// Data
import { CREATE_FIELD_FORM } from '@constants';

// Infrastructures
import { IField } from '@interfaces/field.interface';

// Styles
import styles from './Form.scss';

const FieldsForm: React.FC<InjectedFormProps<IField>> = ({
  error,
  handleSubmit,
  initialValues,
  submitting
}) => {
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
        <Input label="Title" name="title" placeholder="Name" />
        <Input
          label="Description"
          name="description"
          placeholder="Description"
        />
        <Select label="Type" name="type" />
      </Fieldset>

      <div className={styles.Actions}>
        <Button color="primary" fullWidth loaded={submitting} type="submit">
          {isEditMode ? 'Update' : 'Create'}
        </Button>
      </div>
    </Form>
  );
};

export default reduxForm<any, any>({
  asyncValidate: asyncValidate(
    yup.object().shape({ title: yup.string().required() })
  ),
  form: CREATE_FIELD_FORM
})(FieldsForm);
