import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import Form, {
  Actions,
  asyncValidate,
  Fieldset,
  FieldHeader,
  Input
} from '@components/Form';

// Constants
import { UPDATE_COMPANY_NAME_FROM } from '@constants';

// Styles
import styles from './Form.scss';

const GeneralForm: React.FC<InjectedFormProps> = ({
  error,
  handleSubmit,
  submitting,
  ...props
}) => {
  const { title }: any = props;

  return (
    <Form
      classes={{ container: styles.GeneralForm }}
      error={error}
      onSubmit={handleSubmit}
    >
      <FieldHeader label="Avatar" />

      <div className={styles.AvatarBlock}>
        <Avatar alt={title} classes={{ root: styles.Avatar }} />
        <Button
          className={styles.Button}
          color="primary"
          type="submit"
          variant="outlined"
        >
          Upload
        </Button>
      </div>
      <Fieldset>
        <Input label="Company Name" name="companyName" placeholder={title} />
        <Input
          label="Location"
          name="location"
          placeholder="COMPANY_LOCATION"
        />
        <Input
          label="CTimezone"
          name="timezone"
          placeholder="COMPANY_TIMEZONE"
        />
      </Fieldset>

      <Actions>
        <Button color="primary" variant="outlined">
          Save
        </Button>
      </Actions>
    </Form>
  );
};

export default reduxForm<any, any>({
  asyncValidate: asyncValidate(
    yup.object().shape({
      companyName: yup.string().required(),
      location: yup.string(),
      timezone: yup.string()
    })
  ),
  form: UPDATE_COMPANY_NAME_FROM
})(GeneralForm);
