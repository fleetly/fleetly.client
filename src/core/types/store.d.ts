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
      description?: string;
      id?: string;
      position?: 'left-bottom' | 'left-top' | 'right-bottom' | 'right-top';
      timeout?: number;
      title: string;
      variant?: 'alert' | 'danger' | 'info' | 'success';
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
