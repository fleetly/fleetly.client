import { LOGIN, LOGOUT, SET_USER } from './types';

// Interfaces
import { IUser } from '@interfaces/user.interface';

interface Action {
  payload?: IUser;
  type: typeof LOGIN | typeof LOGOUT;
}

const initialState: Store.SessionState = {
  isAuthorized: !!window.localStorage.getItem('isAuthorized') || false,
  user: null
};

export default (state = initialState, action: Action): Store.SessionState => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuthorized: true, user: action.payload! };
    case LOGOUT:
      return { ...state, isAuthorized: false, user: null };
    case SET_USER:
      return { ...state, user: action.payload! };
    default:
      return state;
  }
};
