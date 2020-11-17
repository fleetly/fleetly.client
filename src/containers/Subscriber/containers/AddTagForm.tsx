import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

// Components
import Form, { Select } from '@components/Form';

// Constants
import { ADD_TAG_FORM } from '@constants';

const SubscriberAddTagForm: React.FC<InjectedFormProps<
  Subscriber.AddTagFormValues,
  Subscriber.AddTagFormProps
>> = ({ error, handleSubmit, submitting, ...props }) => {
  const { options }: any = props;

  return (
    <Form error={error} onSubmit={handleSubmit}>
      <Select
        loaded={submitting}
        name="tagId"
        options={options}
        placeholder="Search tag"
      />
    </Form>
  );
};
export default reduxForm<Subscriber.AddTagFormValues, any>({
  form: ADD_TAG_FORM,
  onChange: (value, dispatch, { submit }) => submit()
})(SubscriberAddTagForm);
