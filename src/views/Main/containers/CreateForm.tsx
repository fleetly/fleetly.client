import * as React from 'react';
import { reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, {
  asyncValidate,
  Actions,
  Fieldset,
  Input
} from '@components/Form';

// Constants
import { CREATE_COMPANY_FORM } from '@constants';

const MainCreateForm: React.FC<any> = ({ error, handleSubmit }) => (
  <Form error={error} onSubmit={handleSubmit}>
    <Fieldset>
      <Input label="Name" name="name" />
      <Input label="Title" name="title" />
    </Fieldset>

    <Actions>
      <Button color="primary" fullWidth type="submit">
        Create
      </Button>
    </Actions>
  </Form>
);

export default reduxForm({
  asyncValidate: asyncValidate(
    yup.object().shape({
      name: yup.string().required(),
      title: yup.string().required()
    })
  ),
  form: CREATE_COMPANY_FORM
})(MainCreateForm);
