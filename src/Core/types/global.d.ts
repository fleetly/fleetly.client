export {};

declare global {
  type Color =
    | 'blue'
    | 'default'
    | 'gray'
    | 'green'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'red'
    | 'sky'
    | 'yellow';

  type ColorType =
    | 'danger'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning';

  interface PseudoClasses extends BaseClasses {
    isChecked?: string;
    isDisabled?: string;
    isExpanded?: string;
    isFailed?: string;
    isFocused?: string;
    isSelected?: string;
  }

  interface ExtendedClasses extends PseudoClasses {
    root?: string;
  }
}
