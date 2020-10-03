import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import Form, { asyncValidate, Fieldset, Input } from '@components/Form';
import { P } from '@components/Typography';

// Data
import { ADD_COLLABORATOR_FORM } from '@constants';

// Infrastructures
import { ICollaborator } from '@interfaces/collaborator.interface';

// Styles
import styles from './Form.scss';

const CollaboratorsForm: React.FunctionComponent<InjectedFormProps<
  ICollaborator
>> = ({ error, handleSubmit, initialValues, submitting }) => {
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
        <Input name="userId" />
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
