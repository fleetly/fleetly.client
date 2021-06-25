import get from 'lodash/get';

export const getModalById = (state: Store.State, id: string): any =>
  get(state, `modals.${id}`);
