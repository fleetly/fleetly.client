declare namespace Typography {
  type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'caption';

  interface Classes {
    root?: string;
  }

  interface Props {
    children: React.ReactNode;
    className?: string;
    component?: any;
    htmlFor?: string;
    variant?: Variant;
  }
}
