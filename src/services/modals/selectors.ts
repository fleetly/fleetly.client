import { get } from 'lodash';

export const getModalById = (state: any, id: string): any =>
  get(state, `modals.${id}`);
