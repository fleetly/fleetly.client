import { has } from 'lodash';

// Utils
import { capitalizeFirstLetter } from './string';

export const getClassName = (
  type: string,
  {
    collection = {},
    prefix = 'root',
    value = ''
  }: {
    collection: { [key: string]: string };
    prefix?: string;
    value: string;
  } = { collection: {}, value: '' }
): string | null => {
  const path: string = [prefix, type, value]
    .map((str: string = '') => capitalizeFirstLetter(str.toLocaleLowerCase()))
    .join('');

  return has(collection, path) ? collection[path] : null;
};
