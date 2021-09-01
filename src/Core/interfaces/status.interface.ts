export interface IStatus<StatusType> {
  color?: Color;
  message?: string;
  type: StatusType;
}
