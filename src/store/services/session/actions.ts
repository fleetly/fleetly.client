import { LOGIN, LOGOUT } from './types';

export const login = () => {
  window.localStorage.setItem('isAuthorized', 'true');
  window.location.reload();

  return {
    type: LOGIN
  };
};

export const logout = () => {
  window.localStorage.removeItem('isAuthorized');

  return {
    type: LOGOUT
  };
};
