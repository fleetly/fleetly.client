import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, { asyncValidate, Fieldset, Input } from '@components/Form';
import { P } from '@components/Typography';

import { ColorField } from '../components/Color';

// Constants
import { CREATE_TAG_FORM } from '@constants';

// Interfaces
import { ITag } from '@interfaces/tag.interface';

// Styles
import styles from './Form.scss';

const TagsForm: React.FunctionComponent<InjectedFormProps<ITag>> = ({
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
  form: CREATE_TAG_FORM
})(TagsForm);
