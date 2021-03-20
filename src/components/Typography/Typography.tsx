import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Typography.scss';

// Utils
import { getClassName } from '@utils/styles';

type Variant = 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'text';

interface TypeProps {
  children: React.ReactNode;
  className?: string;
  component?: any;
  htmlFor?: string;
  variant?: Variant;
}

const Typography: React.FC<TypeProps> = ({
  children,
  className,
  component: Component = 'div',
  variant = 'text',
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

export const Caption: React.FC<TypeProps> = (props) => (
  <Typography component="span" variant="caption" {...props} />
);

export const H1: React.FC<TypeProps> = (props) => (
  <Typography component="h1" variant="h1" {...props} />
);

export const H2: React.FC<TypeProps> = (props) => (
  <Typography component="h2" variant="h2" {...props} />
);

export const H3: React.FC<TypeProps> = (props) => (
  <Typography component="h3" variant="h3" {...props} />
);

export const H4: React.FC<TypeProps> = (props) => (
  <Typography component="h4" variant="h4" {...props} />
);

export const H5: React.FC<TypeProps> = (props) => (
  <Typography component="h5" variant="h5" {...props} />
);

export const H6: React.FC<TypeProps> = (props) => (
  <Typography component="h6" variant="h6" {...props} />
);

export const P: React.FC<TypeProps> = (props) => (
  <Typography component="p" variant="text" {...props} />
);

export const Text: React.FC<TypeProps> = (props) => (
  <Typography component="span" variant="text" {...props} />
);
