import * as React from 'react';
import { Field } from 'redux-form';
import { v5 as uuidv5 } from 'uuid';

const reduxFieldAdapter = ({
  children,
  input,
  meta: { error, touched },
  ...props
}: Form.ReduxFieldAdapter) =>
  children({ ...input, ...props, error: touched && error });

const withReduxForm = <T extends {}>(extraProps?: Form.ReduxFieldProps) => (
  FieldComponent: React.SFC<T>
) => (props: any) => {
  const { children, id: propId, name } = props;
  const id: string = propId || uuidv5(name, uuidv5.URL);

  return (
    <Field {...extraProps} {...props} component={reduxFieldAdapter}>
      {(props: any) => (
        <FieldComponent {...props} id={id}>
          {children}
        </FieldComponent>
      )}
    </Field>
  );
};

export default withReduxForm;
