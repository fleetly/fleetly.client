declare namespace Notifications {
  interface BarProps extends Store.NotificationsPayload {
    classes?: ExtendedClasses;
    id: string;
  }
}

export = Notifications;
export as namespace Notifications;
