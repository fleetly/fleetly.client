import { has, set } from 'lodash';

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

export const getTransitionClassNames = (
  prefix: string = 'root',
  styles: any
) => {
  const CLASS_LIST = [
    'appear',
    'appearActive',
    'enter',
    'enterActive',
    'exit',
    'exitActive'
  ];

  const classNames = {};

  CLASS_LIST.forEach((key: string) => {
    const path: string = `${capitalizeFirstLetter(
      prefix
    )}Transition${capitalizeFirstLetter(key)}`;

    if (has(styles, path)) {
      set(classNames, key, styles[path]);
    }
  });

  return classNames;
};
