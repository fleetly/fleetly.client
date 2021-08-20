import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

// Actions
import { login as loginAction, logout as logoutAction } from './actions';

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

  return {
    isAuthorized: session.isAuthorized,
    login,
    logout,
    session
  };
};

export { useSession };
