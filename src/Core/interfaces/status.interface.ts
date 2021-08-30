import { Color } from '@fleetly/common';

export interface IStatus<StatusType> {
  color?: Color;
  message?: string;
  type: StatusType;
}
