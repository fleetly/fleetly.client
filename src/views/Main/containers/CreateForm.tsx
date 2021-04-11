import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, {
  asyncValidate,
  Actions,
  Fieldset,
  Input,
  Toggle
} from '@components/Form';

// Constants
import { CREATE_COMPANY_FORM } from '@constants';

const MainCreateForm: React.FC<InjectedFormProps<Main.CreateFormValues>> = ({
  error,
  handleSubmit
}) => (
  <Form error={error} onSubmit={handleSubmit}>
    <Fieldset>
      <Input label="Name" name="name" placeholder="Unique company name" />
      <Input label="Title" name="title" placeholder="Public display name" />
      <Toggle name="toggle" />
    </Fieldset>

    <Actions>
      <Button color="primary" fullWidth type="submit">
        Create
      </Button>
    </Actions>
  </Form>
);

export default reduxForm<any, any>({
  asyncValidate: asyncValidate(
    yup.object().shape({
      name: yup.string().required(),
      title: yup.string().required()
    })
  ),
  form: CREATE_COMPANY_FORM
})(MainCreateForm);
