export {};

declare global {
  type Color =
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
