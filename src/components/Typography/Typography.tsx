import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Typography.scss';

// Utils
import { getClassName } from '@utils/styles';

const Typography: React.SFC<Typography.Props> = ({
  children,
  className,
  component: Component = 'div',
  variant = 'p',
  ...props
}) => (
  <Component
    {...props}
    className={classNames(
      className,
      styles.Root,
      getClassName('variant', { collection: styles, value: variant })
    )}
  >
    {children}
  </Component>
);

// Exports
export default Typography;

export const P: React.SFC<Typography.Props> = (props) => (
  <Typography component="p" variant="p" {...props} />
);

export const H1: React.SFC<Typography.Props> = (props) => (
  <Typography component="h1" variant="h1" {...props} />
);

export const H2: React.SFC<Typography.Props> = (props) => (
  <Typography component="h2" variant="h2" {...props} />
);

export const H3: React.SFC<Typography.Props> = (props) => (
  <Typography component="h3" variant="h3" {...props} />
);

export const H4: React.SFC<Typography.Props> = (props) => (
  <Typography component="h4" variant="h4" {...props} />
);

export const H5: React.SFC<Typography.Props> = (props) => (
  <Typography component="h5" variant="h5" {...props} />
);

export const H6: React.SFC<Typography.Props> = (props) => (
  <Typography component="h6" variant="h6" {...props} />
);

export const Span: React.SFC<Typography.Props> = (props) => (
  <Typography component="div" variant="span" {...props} />
);
