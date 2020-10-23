import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Actions.scss';

// Utils
import { getClassName } from '@utils/styles';

const FormActions: React.FC<Form.ActionsProps> = ({
  children,
  classes,
  orientation = 'horizontal'
}) => {
  const { rootClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(
        classes?.root,
        styles.Root,
        getClassName('orientation', { collection: styles, value: orientation })
      )
    }),
    [classes, orientation]
  );

  return <div className={rootClassName}>{children}</div>;
};

export default FormActions;
