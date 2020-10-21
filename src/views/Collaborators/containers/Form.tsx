import { useQuery } from 'react-apollo';
import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, { asyncValidate, Fieldset, Select } from '@components/Form';
import { P } from '@components/Typography';

// Data
import { ADD_COLLABORATOR_FORM } from '@constants';

// GraphQL
import GET_USER_LIST from '../graphql/getUserList.gql';

// Infrastructures
import { ICollaborator } from '@interfaces/collaborator.interface';

// Styles
import styles from './Form.scss';

const CollaboratorsForm: React.FunctionComponent<InjectedFormProps<
  ICollaborator
>> = ({ error, handleSubmit, initialValues, submitting }) => {
  const { data } = useQuery(GET_USER_LIST);
  const users = data?.users || [];

  return (
    <Form
      classes={{ container: styles.Root }}
      error={error}
      onSubmit={handleSubmit}
    >
      <P className={styles.Description} component="div">
        You can only find a Fleetly user by their email address or username.
        Invitation of participants to the company affects the number of seats.
      </P>

      <Fieldset classes={{ root: styles.Fieldset }}>
        <Select name="username" options={users} />
      </Fieldset>

      <div className={styles.Actions}>
        <Button color="primary" fullWidth loaded={submitting} type="submit">
          Add
        </Button>
      </div>
    </Form>
  );
};

export default reduxForm<any, any>({
  asyncValidate: asyncValidate(
    yup.object().shape({ title: yup.string().required() })
  ),
  form: ADD_COLLABORATOR_FORM
})(CollaboratorsForm);
