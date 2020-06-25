// Store
import { IState } from '@store';

export const isAuthorized = (state: IState): boolean =>
  state.session.isAuthorized;
