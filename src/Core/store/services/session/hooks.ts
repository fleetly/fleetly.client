import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

// Actions
import {
  login as loginAction,
  logout as logoutAction,
  setUser as setUserAction
} from './actions';

// Interfaces
import { IUser } from '@interfaces/user.interface';

const useSession = () => {
  // Setup
  const dispatch = useDispatch();

  // Data
  const session = useSelector(
    useMemo(
      () =>
        createSelector(
          (state: Store.State) => state.session,
          (session: Store.SessionState) => session
        ),
      []
    )
  );

  // Handlers
  const login = useCallback(() => dispatch(loginAction()), [dispatch]);
  const logout = useCallback(() => dispatch(logoutAction()), [dispatch]);
  const setUser = useCallback((user: IUser) => dispatch(setUserAction(user)), [
    dispatch
  ]);

  return {
    isAuthorized: session.isAuthorized,
    isConfirmed: session.user?.isConfirmed,
    login,
    logout,
    session,
    setUser,
    user: session.user
  };
};

export { useSession };
