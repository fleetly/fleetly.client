// Fleetly
import { MessageStatus } from '@fleetly/chat/dist/common/interfaces';

export interface IMessage {
  readonly id: string;
  readonly author: IMessageAuthor;
  readonly date: string;
  readonly isComment: boolean;
  readonly isOutcoming: boolean;
  readonly status: MessageStatus;
  readonly text: string;
}

export interface IMessageAuthor {
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly photo: string;
  readonly username: string;
}
