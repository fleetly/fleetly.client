import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Typography.scss';

// Utils
import { getClassName } from '@utils/styles';

type TypographySize =
  | 'extraLarge'
  | 'large'
  | 'medium'
  | 'small'
  | 'extraSmall';

type TypographyWeight =
  | 'light'
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold';

type TypographyVariant =
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'text';

export interface TypographyProps {
  className?: string;
  component?: any;
  htmlFor?: string;
  noWrap?: boolean;
  size?: TypographySize;
  weight?: TypographyWeight;
  variant?: TypographyVariant;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  component: Component = 'div',
  noWrap,
  size,
  variant = 'text',
  weight,
  ...props
}) => (
  <Component
    {...props}
    className={classNames(
      className,
      styles.Root,
      size && getClassName('size', { collection: styles, value: size }),
      weight && getClassName('weight', { collection: styles, value: weight }),
      getClassName('variant', { collection: styles, value: variant }),
      {
        [styles.RootModeNoWrap]: noWrap
      }
    )}
  >
    {children}
  </Component>
);

// Exports
export default Typography;

export const Caption: React.FC<TypographyProps> = (props) => (
  <Typography component="span" variant="caption" {...props} />
);

export const H1: React.FC<TypographyProps> = (props) => (
  <Typography component="h1" variant="h1" {...props} />
);

export const H2: React.FC<TypographyProps> = (props) => (
  <Typography component="h2" variant="h2" {...props} />
);

export const H3: React.FC<TypographyProps> = (props) => (
  <Typography component="h3" variant="h3" {...props} />
);

export const H4: React.FC<TypographyProps> = (props) => (
  <Typography component="h4" variant="h4" {...props} />
);

export const H5: React.FC<TypographyProps> = (props) => (
  <Typography component="h5" variant="h5" {...props} />
);

export const H6: React.FC<TypographyProps> = (props) => (
  <Typography component="h6" variant="h6" {...props} />
);

export const P: React.FC<TypographyProps> = (props) => (
  <Typography component="p" variant="text" {...props} />
);

export const Text: React.FC<TypographyProps> = (props) => (
  <Typography component="span" variant="text" {...props} />
);
