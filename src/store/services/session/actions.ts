import { LOGIN, LOGOUT } from './types';

export interface ISessionAction {
  type: typeof LOGIN | typeof LOGOUT;
  payload?: ISessionPayload;
}

export interface ISessionPayload {
  isAuthorized?: boolean;
}

export const login = (): ISessionAction => ({
  type: LOGIN
});

export const logout = (): ISessionAction => ({
  type: LOGOUT
});
