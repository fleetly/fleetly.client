import { LOGIN, LOGOUT } from './types';

interface Action {
  type: typeof LOGIN | typeof LOGOUT;
}

const initialState: Store.SessionState = {
  isAuthorized: true
};

export default (state = initialState, action: Action): Store.SessionState => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuthorized: true };
    case LOGOUT:
      return { ...state, isAuthorized: false };
    default:
      return state;
  }
};
