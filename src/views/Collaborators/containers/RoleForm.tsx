import { Role } from '@fleetly/common/dist/enums';
import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

// Components
import Form, { Select } from '@components/Form';

// Constants
import { UPDATE_COLLABORATOR_ROLE_FORM, ROLES } from '@constants';

// Styles
import styles from './RoleForm.scss';

// @todo - move roles to API
const OPTIONS = ROLES.map((role) => ({
  options: [{ ...role, isDisabled: role.value === Role.OWNER.toUpperCase() }]
}));

const CollaboratorsRoleForm: React.FC<InjectedFormProps<
  Collaborators.RoleFormValues
>> = ({ handleSubmit, submitting, ...props }) => {
  const { disabled } = props as Collaborators.RoleFormProps;

  return (
    <Form onSubmit={handleSubmit}>
      <Select
        classes={{ root: styles.Select }}
        disabled={disabled}
        loaded={submitting}
        name="newRole"
        options={OPTIONS}
        variant="filled"
      />
    </Form>
  );
};

export default reduxForm<
  Collaborators.RoleFormValues,
  Collaborators.RoleFormProps
>({
  enableReinitialize: true,
  form: UPDATE_COLLABORATOR_ROLE_FORM,
  onChange: ({ newRole }, dispatch, { initialValues, submit }: any) => {
    newRole !== initialValues.newRole && submit();
  }
})(CollaboratorsRoleForm);
