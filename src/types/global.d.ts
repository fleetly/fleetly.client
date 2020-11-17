export {};

declare global {
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

  namespace Store {
    interface NotificationsPayload {
      colorType?: ColorType;
      description?: string;
      icon?: string;
      position?: 'left-bottom' | 'left-top' | 'right-bottom' | 'right-top';
      title: string;
      variant?: 'list' | 'single';
    }

    interface NotificationsState {
      [key: string]: NotificationsPayload;
    }

    interface State {
      notifications: NotificationsState;
    }
  }
}
