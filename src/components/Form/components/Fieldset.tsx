import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Fieldset.scss';

const FormFieldset: React.FC<Form.FieldsetProps> = ({ children, classes }) => {
  const { rootClassName } = React.useMemo(
    () => ({ rootClassName: classNames(classes?.root, styles.Root) }),
    [classes]
  );

  return <div className={rootClassName}>{children} </div>;
};

export default FormFieldset;
