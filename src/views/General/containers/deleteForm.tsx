import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Components
import Button from '@components/Button';
import Form, { Actions } from '@components/Form';
import { Caption, H4, H5 } from '@components/Typography';

// Constants
import { DELETE_COMPANY_FORM } from '@constants';

// GraphQL
import GET_COMPANY_BY_ID from '@graphql/getCompanyById.gql';

// Styles
import styles from './Form.scss';

const DeleteForm: React.FC<InjectedFormProps> = ({
  error,
  handleSubmit,
  submitting
}) => {
  const { companyId } = useParams<{ companyId: string }>();
  const { data } = useQuery(GET_COMPANY_BY_ID, { variables: { companyId } });

  return (
    <Form classes={{ root: styles.Form }} error={error} onSubmit={handleSubmit}>
      <H5 className={styles.Title}>Delete</H5>
      <H4 className={styles.CompanyNameBlock}>
        Delete{' '}
        <span className={styles.CompanyName}>«{data?.company?.title}»</span>
      </H4>
      <Caption className={styles.Description}>
        Delete your company can have unintended side effect.
      </Caption>
      <Actions>
        <Button
          color="danger"
          loaded={submitting}
          type="submit"
          variant="outlined"
        >
          Delete
        </Button>
      </Actions>
    </Form>
  );
};

export default reduxForm<any, any>({
  form: DELETE_COMPANY_FORM
})(DeleteForm);
