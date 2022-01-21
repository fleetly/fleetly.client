export const capitalizeFirstLetter = (data: string = ''): string =>
  `${data.charAt(0).toUpperCase()}${data.slice(1)}`;

export const convertToColor = (data: string = ''): Color => {
  const colors: Color[] = [
    'blue',
    'green',
    'orange',
    'pink',
    'purple',
    'red',
    'sky'
  ];

  let hash = 0;

  if (data.length === 0) return colors[0];

  for (let i = 0; i < data.length; ++i) {
    // tslint:disable-next-line: no-bitwise
    hash = data.charCodeAt(i) + ((hash << 5) - hash);
    // tslint:disable-next-line: no-bitwise
    hash = hash & hash;
  }

  hash = ((hash % colors.length) + colors.length) % colors.length;

  return colors[hash];
};

export const formatCurrency = (
  value: number,
  options?: { currency?: string; fraction?: boolean; locale?: string }
): string => {
  const currentIntl = new Intl.NumberFormat(options?.locale || 'en-US', {
    currency: options?.currency || 'USD',
    style: 'currency',
    minimumFractionDigits: options?.fraction ? 2 : 0
  });

  return currentIntl.format(value);
};

export const numberToLetter = (num: number) => {
  let result = '';

  while (num >= 0) {
    result += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[num % 26];
    num = Math.floor(num / 26) - 1;
  }

  return result;
};
