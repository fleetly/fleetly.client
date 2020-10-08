import { Color } from '@fleetly/common/dist/enums';
import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, { asyncValidate, Fieldset, Input, Select } from '@components/Form';
import { P } from '@components/Typography';

// Data
import { CREATE_FIELD_FORM } from '@constants';

// Infrastructures
import { IField } from '@interfaces/field.interface';

// Styles
import styles from './Form.scss';

const colourOptions = [
  {
    avatar: {
      src: 'https://sun1-87.userapi.com/c627722/v627722659/3020/4YaYH8jJt6U.jpg'
    },
    value: 'ocean',
    label: 'Ivan Vyatkin'
  },
  {
    value: 'blue',
    label: 'Blue',
    isDisabled: true
  },
  { value: 'purple', label: 'Purple', color: Color.PURPLE },
  { value: 'red', label: 'Red', color: Color.RED, isFixed: true },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green', color: Color.GREEN },
  { value: 'forest', label: 'Pink', color: Color.PINK }
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
      classes={{ container: styles.Root }}
      error={error}
      onSubmit={handleSubmit}
    >
      {!isEditMode && (
        <P className={styles.Description} component="div">
          Be careful, the wrong key can stop the channel.
        </P>
      )}

      <Fieldset classes={{ root: styles.Fieldset }}>
        <Input label="Title" name="title" placeholder="Name" />
        <Input
          label="Description"
          name="description"
          placeholder="Description"
        />
        <Select label="Type" name="type" options={colourOptions} />
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
