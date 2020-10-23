import * as React from 'react';

const FormFieldset: React.FC<Form.FieldsetProps> = ({ children, classes }) => (
  <div className={classes?.root}>{children} </div>
);

export default FormFieldset;
