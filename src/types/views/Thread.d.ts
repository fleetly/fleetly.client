import { ISubscriberSource } from '@interfaces/subscriber.interface';
import { MessageProps } from './Dialog';

declare namespace Thread {
  interface ItemProps {
    id: string;
    isConversation?: boolean;
    lastMessage: MessageProps;
    subscriber: {
      id: string;
      source: ISubscriberSource;
    };
  }
}

export = Thread;
export as namespace Thread;
