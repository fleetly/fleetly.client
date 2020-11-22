import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { v1 } from 'uuid';

// Types
import {
  CREATE_NOTIFICATION,
  DELETE_ALL_NOTIFICATIONS,
  DELETE_NOTIFICATION
} from './types';

const useNotifications = (currentNotificationId?: string) => {
  // Setup
  const dispatch = useDispatch();

  // Data
  const state =
    useSelector(
      React.useMemo(
        () =>
          createSelector(
            (state: Store.State) => state.notifications,
            (notifiactions: Store.NotificationsState) => notifiactions
          ),
        []
      )
    ) || [];

  const data = React.useMemo(
    () => currentNotificationId && state[currentNotificationId],
    [currentNotificationId, state]
  );

  const notifications = React.useMemo(
    () => Object.keys(state).map((id) => ({ id, ...state[id] })),
    [state]
  );

  // Handlers
  const createNotification = React.useCallback<
    (notification: Store.NotificationsPayload) => void
  >(
    (notification: Store.NotificationsPayload) => {
      const notificationId = v1();

      dispatch({
        notificationId,
        payload: notification,
        type: CREATE_NOTIFICATION
      });
    },
    [dispatch]
  );

  const deleteAllNotifications = React.useCallback(
    () => dispatch({ type: DELETE_ALL_NOTIFICATIONS }),
    [dispatch]
  );

  const deleteNotification = React.useCallback<
    (notificationId?: string) => void
  >(
    (notificationId = currentNotificationId) =>
      dispatch({ notificationId, type: DELETE_NOTIFICATION }),
    [currentNotificationId, dispatch]
  );

  return {
    createNotification,
    data,
    deleteAllNotifications,
    deleteNotification,
    notifications
  };
};

export { useNotifications };