import { has, values } from 'lodash';

// Utils
import { capitalizeFirstLetter } from '@utils/string';

export enum COLOR {
  DANGER = 'danger',
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning'
}

export const getColorClassName = (
  color: COLOR = COLOR.PRIMARY,
  style: { readonly [key: string]: string },
  prefix: string = 'root'
): string | null => {
  const path: string = `${capitalizeFirstLetter(
    prefix
  )}Color${capitalizeFirstLetter(color)}`;

  return values(COLOR).indexOf(color) > -1 && has(style, path)
    ? style[path]
    : null;
};
