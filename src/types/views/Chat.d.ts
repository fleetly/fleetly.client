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

    interface HeaderProps {
      subscriber: ISubscriber;
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
      counter?: string;
      id: string;
      isConversation?: boolean;
      lastMessage: MessageProps;
      subscriber: {
        id: string;
        source: ISubscriberSource;
      };
    }
  }
}

export = Chat;
export as namespace Chat;
