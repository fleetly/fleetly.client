import { get } from 'lodash';
import { useQuery } from 'react-apollo';
import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, { asyncValidate, Fieldset, Input, Select } from '@components/Form';
import Link from '@components/Link';

// Data
import { CREATE_FIELD_FORM } from '@constants';

// GraphQL
import GET_FIELD_TYPE from '../graphql/getFieldType.gql';

// Infrastructures
import { IField } from '@interfaces/field.interface';

// Styles
import styles from './Form.scss';

const FieldsForm: React.FC<InjectedFormProps<IField>> = ({
  error,
  handleSubmit,
  initialValues,
  submitting
}) => {
  const { data: option } = useQuery(GET_FIELD_TYPE);
  const options = get(option, 'fieldTypes', []);

  const isEditMode = initialValues?.id;

  return (
    <Form
      classes={{ container: styles.Container }}
      error={error}
      onSubmit={handleSubmit}
    >
      <Fieldset classes={{ root: styles.Fieldset }}>
        <Input label="Title" name="title" placeholder="Name" />

        <Input
          label="Description"
          name="description"
          placeholder="Description"
        />

        {!isEditMode && (
          <Select
            hint={<Link>About field types</Link>}
            label="Type"
            name="type"
            options={options}
          />
        )}
      </Fieldset>

      <div className={styles.Actions}>
        <Button color="primary" fullWidth loaded={submitting} type="submit">
          {isEditMode ? 'Update' : 'Create'}
        </Button>
      </div>
    </Form>
  );
};

export default reduxForm<any, any>({
  asyncValidate: asyncValidate(
    yup.object().shape({ title: yup.string().required() })
  ),
  form: CREATE_FIELD_FORM
})(FieldsForm);
