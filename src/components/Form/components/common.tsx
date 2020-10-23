import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './common.scss';

export const FieldError = ({ classes, error }: any) => {
  const { rootClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(classes?.error, styles.Error)
    }),
    [classes]
  );

  return error ? <div className={rootClassName}>{error}</div> : null;
};

export const FieldHeader = ({ classes, hint, id, label }: any) => {
  const { rootClassName, labelClassName, hintClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(classes?.header, styles.Header),
      labelClassName: classNames(classes?.label, styles.Label),
      hintClassName: classNames(classes?.hint, styles.Hint)
    }),
    [classes]
  );

  return label || hint ? (
    <div className={rootClassName}>
      <label className={labelClassName} htmlFor={id}>
        {label}
      </label>

      <div className={hintClassName}>{hint}</div>
    </div>
  ) : null;
};
