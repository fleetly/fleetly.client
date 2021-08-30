export const copyToClipboard = (str: string = ''): void => {
  const el = document.createElement('textarea');
  el.value = str;

  // $FlowFixMe
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');

  // $FlowFixMe
  document.body.removeChild(el);
};
