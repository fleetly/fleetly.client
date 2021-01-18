import { IMessage } from '@interfaces/message.interface';
import { ISubscriberSource } from '@interfaces/subscriber.interface';

declare namespace Chat {
  interface Author {
    firstname?: string;
    lastname?: string;
    photo?: string;
    username?: string;
  }

  namespace Dialog {
    interface CommentProps {
      author: Author;
      date: Date;
      text: string;
    }

    interface DateProps {
      groups?: GroupProps[];
      date: Date;
    }

    interface GroupProps {
      author: Author;
      isIncoming?: boolean;
      messages: MessageProps[];
    }

    interface MessageProps {
      date: Date;
      isIncoming?: boolean;
      status?: 'delivered' | 'read' | 'sent';
      text: string;
    }
  }

  namespace Threads {
    interface ItemProps {
      id: string;
      counter?: number;
      isConversation?: boolean;
      lastMessage: IMessage;
      subscriber: ISubscriber;
    }
  }
}

export = Chat;
export as namespace Chat;
