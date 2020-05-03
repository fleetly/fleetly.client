import * as React from 'react';

const FormFieldset: React.SFC<Form.Fieldset.Props> = ({
  children,
  classes
}) => <div className={classes?.root}>{children} </div>;

export default FormFieldset;
