import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import * as yup from 'yup';

// Components
import Form, { asyncValidate, Actions, Input } from '@components/Form';
import Button from '@components/Button';

const SubscriberSetFieldForm: React.FC<InjectedFormProps<
  any,
  { title: string }
>> = ({ error, handleSubmit, submitting, ...props }) => {
  const { title }: any = props;

  return (
    <Form error={error} onSubmit={handleSubmit}>
      <Input label={title} name="value" />

      <Actions>
        <Button color="primary" fullWidth loaded={submitting} type="submit">
          Save
        </Button>
      </Actions>
    </Form>
  );
};

export default reduxForm<any, any>({
  asyncValidate: asyncValidate(
    yup.object().shape({ value: yup.string().required() })
  ),
  form: 'test'
})(SubscriberSetFieldForm);
