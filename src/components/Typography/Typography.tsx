import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Typography.scss';

enum VARIANT {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p'
}

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  component?: any;
  variant?: VARIANT;
}

const Typography: React.SFC<TypographyProps> = ({
  children,
  className,
  component: Component = 'div',
  variant = VARIANT.P,
  ...props
}) => (
  <Component
    {...props}
    className={classNames(className, styles.Root, {
      // Body
      [styles.RootVariantCaption]: variant === VARIANT.P,
      [styles.RootVariantP]: variant === VARIANT.P,
      // Headers
      [styles.RootVariantH1]: variant === VARIANT.H1,
      [styles.RootVariantH2]: variant === VARIANT.H2,
      [styles.RootVariantH3]: variant === VARIANT.H3,
      [styles.RootVariantH4]: variant === VARIANT.H4,
      [styles.RootVariantH5]: variant === VARIANT.H5,
      [styles.RootVariantH6]: variant === VARIANT.H6
    })}
  >
    {children}
  </Component>
);

// Exports
export default Typography;

export const P: React.SFC<TypographyProps> = (props: TypographyProps) => (
  <Typography component="p" variant={VARIANT.P} {...props} />
);

export const H1: React.SFC<TypographyProps> = (props: TypographyProps) => (
  <Typography component="h1" variant={VARIANT.H1} {...props} />
);

export const H2: React.SFC<TypographyProps> = (props: TypographyProps) => (
  <Typography component="h2" variant={VARIANT.H2} {...props} />
);

export const H3: React.SFC<TypographyProps> = (props: TypographyProps) => (
  <Typography component="h3" variant={VARIANT.H3} {...props} />
);

export const H4: React.SFC<TypographyProps> = (props: TypographyProps) => (
  <Typography component="h4" variant={VARIANT.H4} {...props} />
);

export const H5: React.SFC<TypographyProps> = (props: TypographyProps) => (
  <Typography component="h5" variant={VARIANT.H5} {...props} />
);

export const H6: React.SFC<TypographyProps> = (props: TypographyProps) => (
  <Typography component="h6" variant={VARIANT.H6} {...props} />
);
