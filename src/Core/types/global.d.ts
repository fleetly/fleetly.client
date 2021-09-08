export {};

declare global {
  type Color =
    | 'blue'
    | 'dark'
    | 'gray'
    | 'green'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'red'
    | 'sky'
    | 'yellow';

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
