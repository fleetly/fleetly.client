import { useQuery } from 'react-apollo';
import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, { asyncValidate, Select } from '@components/Form';

// Data
import { ADD_COLLABORATOR_FORM } from '@constants';

// GraphQL
import GET_USER_LIST from '../graphql/getUserList.gql';

// Infrastructures
import { ICollaborator } from '@interfaces/collaborator.interface';
import { IUser } from '@interfaces/user.interface';

// Styles
import styles from './Form.scss';

// Utils
import { convertToColor } from '@utils/string';

const CollaboratorsForm: React.FunctionComponent<InjectedFormProps<
  ICollaborator
>> = ({ error, handleSubmit, submitting }) => {
  const { data } = useQuery<{ users: IUser[] }>(GET_USER_LIST);

  const users = React.useMemo(
    () =>
      (data?.users || []).map(({ id, email, username }) => ({
        avatar: {
          alt: username
        },
        color: convertToColor(id),
        description: username,
        label: email,
        value: id
      })),
    [data]
  );

  return (
    <Form classes={{ root: styles.Root }} error={error} onSubmit={handleSubmit}>
      <Select name="userId" options={users} />

      <div className={styles.Actions}>
        <Button color="primary" fullWidth loaded={submitting} type="submit">
          Add Collaborator
        </Button>
      </div>
    </Form>
  );
};

export default reduxForm<any, any>({
  form: ADD_COLLABORATOR_FORM
})(CollaboratorsForm);
