import { LOGIN, LOGOUT } from './types';

export interface ISessionState {
  isAuthorized: boolean;
}

const initialState: ISessionState = {
  isAuthorized: true
};

export default (
  state: ISessionState = initialState,
  action: any
): ISessionState => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuthorized: true };
    case LOGOUT:
      return { ...state, isAuthorized: false };
    default:
      return state;
  }
};
