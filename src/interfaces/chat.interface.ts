import { IMessage } from './message.interface';
import { ISubscriber } from './subscriber.interface';

export interface IChat {
  readonly id: string;
  readonly lastMessage: IMessage;
  readonly status: string;
  readonly subscriber: ISubscriber;
}
