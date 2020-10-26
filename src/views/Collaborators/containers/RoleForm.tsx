import { Color } from '@fleetly/common/dist/enums';
import * as React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form, { Select } from '@components/Form';

// Constants
import { UPDATE_COLLABORATOR_ROLE_FORM } from '@constants';

// Styles
import styles from './RoleForm.scss';

// @todo - move roles to API
const OPTIONS = [
  {
    options: [
      {
        color: Color.ORANGE,
        info: 'Can disable and delete the company!',
        isDisabled: true,
        label: 'Owner',
        value: 'OWNER'
      }
    ]
  },
  {
    options: [
      {
        color: Color.PURPLE,
        info:
          'Can edit company resources: channels, fields, tags. Can edit and block subscribers.',
        label: 'Admin',
        value: 'ADMIN'
      }
    ]
  },
  {
    options: [
      {
        color: Color.BLUE,
        info: 'Can read company resources. Can send messages in Fleetly.Chat.',
        label: 'Member',
        value: 'MEMBER'
      }
    ]
  }
];

const CollaboratorsRoleForm: React.FC<Collaborators.RoleFormProps> = ({
  disabled,
  handleSubmit,
  submitting
}) => (
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

export default reduxForm<any, any>({
  enableReinitialize: true,
  form: UPDATE_COLLABORATOR_ROLE_FORM,
  onChange: ({ newRole }, dispatch, { initialValues, submit }) => {
    newRole !== initialValues.newRole && submit();
  }
})(CollaboratorsRoleForm);
