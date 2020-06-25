// Store
import { IState } from '@store/index';

export const isAuthorized = (state: IState): boolean =>
  state.session.isAuthorized;
