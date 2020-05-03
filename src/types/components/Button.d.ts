declare namespace Button {
  interface Classes extends ExtendedClasses {
    icon?: string;
    spinner?: string;
  }

  interface Props {
    children?: React.ReactNode;
    className?: string;
    classes?: Classes;
    color?: Color;
    disabled?: boolean;
    icon?: string;
    loaded?: boolean;
    onClick?(event: React.SyntheticEvent<HTMLButtonElement>): void;
    to?: string;
    type?: 'button' | 'reset' | 'submit';
    variant?: 'filled' | 'outlined';
  }
}

export = Button;
export as namespace Button;
