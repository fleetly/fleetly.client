import * as React from 'react';
import { reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, {
  asyncValidate,
  Actions,
  Fieldset,
  Input,
  Select
} from '@components/Form';
import Link from '@components/Link';

// Data
import { CREATE_FIELD_FORM } from '@constants';

const FieldsForm: React.FC<Fields.FormProps> = ({
  error,
  fieldTypes,
  handleSubmit,
  initialValues,
  submitting
}) => {
  const isEditMode = initialValues?.id;

  return (
    <Form error={error} onSubmit={handleSubmit}>
      <Fieldset>
        <Input label="Title" name="title" placeholder="Name" />

        <Input
          label="Description"
          name="description"
          placeholder="Description"
        />

        {!isEditMode && (
          <Select
            hint={<Link>About field types</Link>}
            label="Type"
            name="type"
            options={fieldTypes}
          />
        )}
      </Fieldset>

      <Actions>
        <Button color="primary" fullWidth loaded={submitting} type="submit">
          {isEditMode ? 'Update' : 'Create'}
        </Button>
      </Actions>
    </Form>
  );
};

export default reduxForm<any, any>({
  asyncValidate: asyncValidate(
    yup.object().shape({ title: yup.string().required() })
  ),
  form: CREATE_FIELD_FORM
})(FieldsForm);
