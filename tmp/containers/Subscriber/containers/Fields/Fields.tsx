import * as React from 'react';

// Components
import Modal from '@components/Modal';
import Field from '../../components/Field';

// Constants
import { SET_FIELD_FORM, SET_FIELD_MODAL } from '@constants';

// Containers
import Form from '../SetFieldForm';

// Hooks
import { useSubscriberFields } from './Fields.hooks';

// Styles
import styles from './Fields.scss';

const SubscriberFields: React.FC<Subscriber.FieldsProps> = ({
  fields = [],
  fieldTypes,
  values
}) => {
  const {
    displayedFields,
    handleFieldClick,
    handleFieldRemove,
    handleFieldSubmit
  } = useSubscriberFields({ fields, fieldTypes, values });

  return (
    <div className={styles.Root}>
      {displayedFields.map((field) => (
        <Field
          key={field.id}
          {...field}
          onClick={handleFieldClick}
          onRemove={handleFieldRemove}
        />
      ))}

      <Modal id={SET_FIELD_MODAL} title="Set Field">
        {({ fieldId, fieldTitle, value }: Subscriber.FieldModalData) => (
          <Form
            form={`${SET_FIELD_FORM}-${fieldId}`}
            initialValues={{ fieldId, value }}
            onSubmit={handleFieldSubmit}
            title={fieldTitle}
          />
        )}
      </Modal>
    </div>
  );
};

export default SubscriberFields;
