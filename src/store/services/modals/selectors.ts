import { get } from 'lodash';

// Store
import { IState } from '@store';

export const getModalById = (state: IState, id: string): any =>
  get(state, `modals.${id}`);
