import { v1 } from 'uuid';

// Types
import {
  CREATE_NOTIFICATION,
  DELETE_ALL_NOTIFICATIONS,
  DELETE_NOTIFICATION
} from './types';

export const createNotification = (payload: Store.NotificationsPayload) => ({
  notificationId: payload.id || v1(),
  payload,
  type: CREATE_NOTIFICATION
});

export const deleteAllNotifications = () => ({
  type: DELETE_ALL_NOTIFICATIONS
});

export const deleteNotification = (id: string) => ({
  id,
  type: DELETE_NOTIFICATION
});
