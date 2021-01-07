// Interfaces
import { ISubscriberSource } from '@interfaces/subscriber.interface';

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
    children?: React.ReactNode;
    date: Date;
  }

  interface HeaderProps {
    subscriber: ISubscriberSource;
  }

  interface MessageProps {
    date?: Date;
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
