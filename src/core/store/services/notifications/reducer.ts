import omit from 'lodash/omit';

// Types
import {
  CREATE_NOTIFICATION,
  DELETE_ALL_NOTIFICATIONS,
  DELETE_NOTIFICATION
} from './types';

interface Action {
  notificationId?: string;
  payload?: Store.NotificationsPayload;
  type:
    | typeof CREATE_NOTIFICATION
    | typeof DELETE_ALL_NOTIFICATIONS
    | typeof DELETE_NOTIFICATION;
}

const initialState: Store.NotificationsState = {};

export default (
  state = initialState,
  action: Action
): Store.NotificationsState => {
  const notificationId = action?.notificationId;
  const payload = action?.payload;

  switch (action.type) {
    case CREATE_NOTIFICATION:
      return notificationId && payload
        ? { ...state, [notificationId]: payload }
        : state;
    case DELETE_ALL_NOTIFICATIONS:
      return initialState;
    case DELETE_NOTIFICATION:
      return notificationId ? omit(state, notificationId) : state;
    default:
      return state;
  }
};
