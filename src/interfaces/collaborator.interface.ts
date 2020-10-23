import { IUser } from '@interfaces/user.interface';

export interface ICollaborator {
  id: string;
  role: string;
  user: IUser;
}
