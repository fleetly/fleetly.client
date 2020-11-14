import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

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
import { RENAME_COMPANY_FORM } from '@constants';

// GraphQL
import GET_COMPANY_BY_ID from '@graphql/getCompanyById.gql';

// Styles
import styles from './Form.scss';

const GeneralForm: React.FC<InjectedFormProps> = ({
  error,
  handleSubmit,
  submitting
}) => {
  const { companyId } = useParams<{ companyId: string }>();
  const { data } = useQuery(GET_COMPANY_BY_ID, { variables: { companyId } });

  return (
    <Form
      classes={{ container: styles.GeneralForm }}
      error={error}
      onSubmit={handleSubmit}
    >
      <FieldHeader label="Avatar" />

      <div className={styles.AvatarBlock}>
        <Avatar alt={data?.company?.title} classes={{ root: styles.Avatar }} />
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
        <Input
          label="Company Name"
          name="companyName"
          placeholder={data?.company?.title}
        />
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
  form: RENAME_COMPANY_FORM
})(GeneralForm);
