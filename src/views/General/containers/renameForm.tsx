import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Components
import Button from '@components/Button';
import Form, { asyncValidate, Input } from '@components/Form';
import { Caption, H4, H5 } from '@components/Typography';

// Constants
import { RENAME_COMPANY_FORM } from '@constants';

// GraphQL
import GET_COMPANY_BY_ID from '@graphql/getCompanyById.gql';

// Styles
import styles from './Form.scss';

const RenameForm: React.FC<InjectedFormProps> = ({
  error,
  handleSubmit,
  submitting
}) => {
  const { companyId } = useParams<{ companyId: string }>();
  const { data } = useQuery(GET_COMPANY_BY_ID, { variables: { companyId } });

  return (
    <Form classes={{ root: styles.Form }} error={error} onSubmit={handleSubmit}>
      <H5 className={styles.Title}>Rename</H5>
      <H4 className={styles.CompanyNameBlock}>
        Rename{' '}
        <span className={styles.CompanyName}>«{data?.company?.title}»</span> to
        something new
      </H4>
      <Caption className={styles.Description}>
        Renaming your company can have unintended side effects.
      </Caption>
      <div className={styles.FormInput}>
        <Input name="newName" placeholder="New name" />

        <Button
          className={styles.Button}
          color="danger"
          loaded={submitting}
          type="submit"
          variant="outlined"
        >
          Rename
        </Button>
      </div>
    </Form>
  );
};

export default reduxForm<any, any>({
  asyncValidate: asyncValidate(
    yup.object().shape({ newName: yup.string().required() })
  ),
  form: RENAME_COMPANY_FORM
})(RenameForm);
