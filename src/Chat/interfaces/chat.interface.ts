// Fleetly
import { ChatStatus } from '@fleetly/chat/interfaces';

import { IMessage } from './message.interface';
import { ISubscriber } from '@interfaces/subscriber.interface';

export interface IChat {
  readonly id: string;
  readonly lastMessage: IMessage;
  readonly status: ChatStatus;
  readonly subscriber: ISubscriber;
}
