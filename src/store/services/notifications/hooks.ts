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

interface INotification extends Store.NotificationsPayload {
  timeout?: number;
}

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
  const deleteNotification = React.useCallback<
    (notificationId?: string) => void
  >(
    (notificationId = currentNotificationId) =>
      dispatch({ notificationId, type: DELETE_NOTIFICATION }),
    [currentNotificationId, dispatch]
  );

  const createNotification = React.useCallback<
    (notification: INotification) => void
  >(
    (notification: INotification) => {
      const notificationId = v1();

      dispatch({
        notificationId,
        payload: notification,
        type: CREATE_NOTIFICATION
      });

      if (notification.timeout) {
        setTimeout(
          () => deleteNotification(notificationId),
          notification.timeout
        );
      }
    },
    [deleteNotification, dispatch]
  );

  const deleteAllNotifications = React.useCallback(
    () => dispatch({ type: DELETE_ALL_NOTIFICATIONS }),
    [dispatch]
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
