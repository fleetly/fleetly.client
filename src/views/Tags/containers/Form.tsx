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

// Interfaces
import { ITag } from '@interfaces/tag.interface';

const TagsForm: React.FC<InjectedFormProps<ITag>> = ({
  error,
  handleSubmit,
  initialValues,
  submitting
}) => {
  const isEditMode = initialValues?.id;

  return (
    <Form error={error} onSubmit={handleSubmit}>
      <Fieldset>
        <Input label="Title" name="title" placeholder="Title" />

        <Input
          label="Description"
          name="description"
          placeholder="Description"
        />

        <ColorField name="color" />
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
  form: CREATE_TAG_FORM
})(TagsForm);
