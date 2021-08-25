import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, {
  asyncValidate,
  Actions,
  Fieldset,
  Input
} from '@components/Form';

import ColorField from '../components/ColorField';

// Constants
import { CREATE_TAG_FORM } from '@constants';

const TagsForm: React.FC<InjectedFormProps<Tags.FormValues>> = ({
  error,
  handleSubmit,
  initialValues,
  submitting
}) => {
  const isEditMode = initialValues?.tagId;

  return (
    <Form error={error} onSubmit={handleSubmit}>
      <Fieldset>
        <Input label="Title" name="tag.title" placeholder="Title" />

        <Input
          label="Description"
          name="tag.description"
          placeholder="Description"
        />

        <ColorField name="tag.color" />
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
    yup
      .object()
      .shape({ tag: yup.object().shape({ title: yup.string().required() }) })
  ),
  form: CREATE_TAG_FORM
})(TagsForm);
