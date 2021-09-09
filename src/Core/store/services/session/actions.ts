// Interfaces
import { IUser } from '@interfaces/user.interface';

// Types
import { LOGIN, LOGOUT, SET_USER } from './types';

export const login = (user: IUser) => {
  window.localStorage.setItem('isAuthorized', 'true');

  return {
    payload: user,
    type: LOGIN
  };
};

export const logout = () => {
  window.localStorage.removeItem('isAuthorized');

  return {
    type: LOGOUT
  };
};

export const setUser = (user: IUser) => ({
  payload: user,
  type: SET_USER
});
