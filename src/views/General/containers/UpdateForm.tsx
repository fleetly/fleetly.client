import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, {
  Actions,
  Avatar,
  asyncValidate,
  Fieldset,
  Input
} from '@components/Form';

// Constants
import { UPDATE_COMPANY_NAME_FROM } from '@constants';
import { convertToColor } from '@utils/string';

const GeneralUpdateForm: React.FC<InjectedFormProps<
  General.UpdateFormValues
>> = ({ error, handleSubmit, initialValues, submitting }) => (
  <Form error={error} onSubmit={handleSubmit}>
    <Fieldset>
      <Avatar
        alt={initialValues.title}
        color={convertToColor(initialValues.companyId)}
        label="Logo"
        name="logo"
      />

      <Input label="Company Name" name="title" placeholder="Display Name" />
      <Input label="Location" name="location" placeholder="Moscow" />
      <Input label="Timezone" name="timezone" placeholder="GMT +3" />
    </Fieldset>

    <Actions>
      <Button color="primary" fullWidth loaded={submitting}>
        Save
      </Button>
    </Actions>
  </Form>
);

export default reduxForm<General.UpdateFormValues>({
  asyncValidate: asyncValidate(
    yup.object().shape({
      companyName: yup.string().required(),
      location: yup.string(),
      timezone: yup.string()
    })
  ) as any,
  form: UPDATE_COMPANY_NAME_FROM
})(GeneralUpdateForm);
