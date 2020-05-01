import { isEmpty, keys, merge } from 'lodash';
import url from 'url';

export const isExternal = (str: string): boolean => {
  const { host } = url.parse(str);
  return !!host && host !== window.location.host;
};

// @todo - describe these types somehow
type QueryKey = number | string;
type QueryType = number | string | number[] | string[];

type InputType = {
  base: string;
  hash: string;
  path: string | string[];
  query: {
    [key in QueryKey]: QueryType;
  };
};

export const resolve = (input: string | string[] | InputType): string => {
  const data: InputType = {
    base: '/',
    hash: '',
    path: [],
    query: {}
  };

  const { base, hash, path, query }: InputType = merge(
    data,
    Array.isArray(input)
      ? { path: [...input] }
      : typeof input === 'string'
      ? { path: [input] }
      : input
  );

  let url: string = [base].concat(path).join('/');

  if (!isEmpty(query)) {
    const queries: string[] = keys(query).map(
      (key: number | string): string => {
        const value = query[key];
        return `${key}=${(Array.isArray(value) ? [...value] : [value]).join(
          ','
        )}`;
      }
    );

    if (queries.length > 1) {
      url = `${url}?${queries.join('&')}`;
    }
  }

  if (hash) {
    url = `${url}#${hash}`;
  }

  return url.replace(url.match(/^https?:/) ? /([^:])\/\/+/g : /()\/+/g, '$1/');
};
