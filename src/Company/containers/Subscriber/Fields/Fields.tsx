import React from 'react';
import { Form } from 'react-final-form';
import * as yup from 'yup';

// Components
import Button from '@components/Button';
import {
  Actions,
  Error,
  Field,
  Fieldset,
  yupValidator
} from '@components/Form';
import Modal from '@components/Modal';

import { SubscriberFieldsItem } from './components/Item';

// Constants
import { SET_FIELD_MODAL } from '@constants';

// Hooks
import { useSubscriberFields } from './Fields.hooks';

export const SubscriberFields: React.FC<any> = (props) => {
  // Setup
  const {
    displayedFields,
    handleFormSubmit,
    handleRemoveClick
  } = useSubscriberFields(props);

  return (
    <div>
      {displayedFields.map((field) => (
        <SubscriberFieldsItem
          {...field}
          key={field.id}
          onRemove={handleRemoveClick}
        />
      ))}

      <Modal id={SET_FIELD_MODAL} title="Set Field">
        {({ fieldId, title, value }: any) => (
          <Form
            initialValues={{ fieldId, value }}
            onSubmit={handleFormSubmit}
            validate={yupValidator(
              yup.object().shape({ value: yup.string().required() })
            )}
          >
            {({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit}>
                <Error />

                <Fieldset>
                  <Field label={title} name="value" />
                </Fieldset>

                <Actions>
                  <Button
                    color="primary"
                    fullWidth
                    loaded={submitting}
                    type="submit"
                  >
                    Save
                  </Button>
                </Actions>
              </form>
            )}
          </Form>
        )}
      </Modal>
    </div>
  );
};
