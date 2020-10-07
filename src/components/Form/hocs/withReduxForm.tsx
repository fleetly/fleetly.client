import * as React from 'react';
import { Field } from 'redux-form';
import { v5 as uuidv5 } from 'uuid';

const reduxFieldAdapter = ({
  children,
  input,
  meta: { error, touched },
  ...props
}: Form.FieldAdapter) =>
  children({ ...input, ...props, error: touched && error });

const withReduxForm = <T extends any>(extraProps?: any) => (
  FieldComponent: React.FC<T>
  // @todo - defined types for props
) => (props: any) => {
  const { children, id: propId, name, withoutRedux } = props;
  const id: string = propId || uuidv5(name, uuidv5.URL);

  return withoutRedux ? (
    <FieldComponent {...props} id={id}>
      {children}
    </FieldComponent>
  ) : (
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
