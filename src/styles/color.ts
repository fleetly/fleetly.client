import { has, values } from 'lodash';

// Utils
import { capitalizeFirstLetter } from '@utils/string';

export enum Color {
  Danger,
  Default,
  Primary,
  Secondary,
  Success,
  Warning
}

export const getColorClassName = (
  color: Color = Color.Primary,
  style: { readonly [key: string]: string },
  prefix: string = 'root'
): string | null => {
  const path: string = `${capitalizeFirstLetter(prefix)}Color${Color[color]}`;

  return values(Color).indexOf(color) > -1 && has(style, path)
    ? style[path]
    : null;
};
