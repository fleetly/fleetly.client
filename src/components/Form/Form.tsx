import * as React from 'react';

const Form = ({ children, classes, onSubmit }: Form.Props) => (
  <form className={classes?.root} onSubmit={onSubmit}>
    <div className={classes?.container}>{children}</div>
  </form>
);

export default Form;
