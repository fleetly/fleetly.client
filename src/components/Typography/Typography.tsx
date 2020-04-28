import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Typography.scss';

export enum TypographyVariant {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p
}

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  component?: any;
  variant?: TypographyVariant;
  htmlFor?: string;
}

const Typography: React.SFC<TypographyProps> = ({
  children,
  className,
  component: Component = 'div',
  variant = TypographyVariant.p,
  ...props
}) => (
  <Component
    {...props}
    className={classNames(className, styles.Root, {
      // Body
      [styles.RootVariantP]: variant === TypographyVariant.p,
      // Headers
      [styles.RootVariantH1]: variant === TypographyVariant.h1,
      [styles.RootVariantH2]: variant === TypographyVariant.h2,
      [styles.RootVariantH3]: variant === TypographyVariant.h3,
      [styles.RootVariantH4]: variant === TypographyVariant.h4,
      [styles.RootVariantH5]: variant === TypographyVariant.h5,
      [styles.RootVariantH6]: variant === TypographyVariant.h6
    })}
  >
    {children}
  </Component>
);

// Exports
export default Typography;

export const P: React.SFC<TypographyProps> = (props: TypographyProps) => (
  <Typography component="p" variant={TypographyVariant.p} {...props} />
);

export const H1: React.SFC<TypographyProps> = (props: TypographyProps) => (
  <Typography component="h1" variant={TypographyVariant.h1} {...props} />
);

export const H2: React.SFC<TypographyProps> = (props: TypographyProps) => (
  <Typography component="h2" variant={TypographyVariant.h2} {...props} />
);

export const H3: React.SFC<TypographyProps> = (props: TypographyProps) => (
  <Typography component="h3" variant={TypographyVariant.h3} {...props} />
);

export const H4: React.SFC<TypographyProps> = (props: TypographyProps) => (
  <Typography component="h4" variant={TypographyVariant.h4} {...props} />
);

export const H5: React.SFC<TypographyProps> = (props: TypographyProps) => (
  <Typography component="h5" variant={TypographyVariant.h5} {...props} />
);

export const H6: React.SFC<TypographyProps> = (props: TypographyProps) => (
  <Typography component="h6" variant={TypographyVariant.h6} {...props} />
);
