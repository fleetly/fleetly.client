import { get } from 'lodash';

export const getModalById = (state: Store.State, id: string): any =>
  get(state, `modals.${id}`);
