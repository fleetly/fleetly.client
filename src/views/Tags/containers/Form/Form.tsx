import { Color } from '@fleetly/common/dist/enums';
import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, { asyncValidate, Fieldset, Input } from '@components/Form';
import { P } from '@components/Typography';

import { ColorField } from '../../components/Color';

// Data
import { TAGS_FORM } from '../../data';

// Styles
import styles from './Form.scss';

const TagsForm: React.FunctionComponent<InjectedFormProps<
  {
    color: Color;
    description: string;
    id: string;
    title: string;
  },
  {},
  string
>> = ({ handleSubmit, initialValues, submitting }) => {
  const isEditMode = initialValues?.id;

  return (
    <Form classes={{ container: styles.Root }} onSubmit={handleSubmit}>
      {!isEditMode && (
        <P className={styles.Description} component="div">
          Created tags can be changed at any time.
        </P>
      )}

      <Fieldset classes={{ root: styles.Fieldset }}>
        <Input name="title" placeholder="Name" />
        <Input name="description" placeholder="Description" />
        <ColorField name="color" />
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
  form: TAGS_FORM
})(TagsForm);
