import { v1 } from 'uuid';

// Types
import {
  CREATE_NOTIFICATION,
  DELETE_ALL_NOTIFICATIONS,
  DELETE_NOTIFICATION
} from './types';

interface INotificationsPayload {
  description?: string;
  icon?: string;
  title?: string;
}

export const createNotification = (payload: INotificationsPayload) => ({
  id: v1(),
  payload,
  type: CREATE_NOTIFICATION
});

export const deleteNotification = (id: string) => ({
  id,
  type: DELETE_NOTIFICATION
});
