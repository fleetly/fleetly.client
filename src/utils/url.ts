import url from 'url';

export const isExternal = (str: string): boolean => {
  const { host } = url.parse(str);
  return !!host && host !== window.location.host;
};
