export {};

declare global {
  namespace Store {
    interface ModalsPayload {
      data?: Record<string, any>;
      title?: string;
    }

    interface ModalsState {
      [key: string]: boolean | ModalsPayload;
    }

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

    interface SessionState {
      isAuthorized: boolean;
    }

    interface State {
      modals: ModalsState;
      notifications: NotificationsState;
      session: SessionState;
    }
  }
}
