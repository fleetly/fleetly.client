import { Color } from '@fleetly/common/dist/enums';
import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, { asyncValidate, Fieldset, Input, Select } from '@components/Form';
import Link from '@components/Link';

// Data
import { CREATE_FIELD_FORM } from '@constants';

// Infrastructures
import { IField } from '@interfaces/field.interface';

// Styles
import styles from './Form.scss';

// @todo - remove mocks
const groupedOptions = [
  {
    label: null,
    options: [
      {
        color: Color.RED,
        label: 'Owner',
        description:
          'Can read, clone, and push to this repository. They can also manage issues, pull request, and some repository settings.',
        value: 0
      }
    ]
  },
  {
    label: null,
    options: [
      {
        color: Color.PURPLE,
        label: 'Admin',
        description:
          'Can read, clone, and push to this repository. They can also manage issues, pull request, and some repository settings.',
        value: 1
      }
    ]
  },
  {
    label: null,
    options: [
      {
        color: Color.BLUE,
        label: 'Member',
        description:
          'Can read, clone, and push to this repository. They can also manage issues, pull request, and some repository settings.',
        value: 2
      }
    ]
  }
];

const FieldsForm: React.FC<InjectedFormProps<IField>> = ({
  error,
  handleSubmit,
  initialValues,
  submitting
}) => {
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
            options={groupedOptions}
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
