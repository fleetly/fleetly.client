// Interfaces
import { ISubscriber } from '@interfaces/subscriber.interface';

declare namespace Dialog {
  interface Author {
    firstname?: string;
    lastname?: string;
    photo?: string;
    username?: string;
  }

  interface CommentProps {
    author: Author;
    date: Date;
    text: string;
  }

  interface DateProps {
    groups?: GroupProps[];
    date: Date;
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

  interface GroupProps {
    author: Author;
    isIncoming?: boolean;
    messages: MessageProps[];
  }
}

export = Dialog;
export as namespace Dialog;
