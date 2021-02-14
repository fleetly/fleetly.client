// Fleetly
import { MessageStatus } from '@fleetly/chat/dist/common/interfaces';

// Interfaces
import { IMessage, IMessageAuthor } from '@interfaces/message.interface';
import { ISubscriber } from '@interfaces/subscriber.interface';

declare namespace Chat {
  interface Author {
    firstname?: string;
    lastname?: string;
    photo?: string;
    username?: string;
  }

  interface Sticker {
    height: number;
    url: string;
    width: number;
  }

  namespace Messages {
    interface Root {
      chatId: string;
    }

    interface Date {
      date: string;
      messages: IMessage[];
    }

    interface Group {
      author: IMessageAuthor;
      isComment?: boolean;
      isOutcoming?: boolean;
      messages: Text[];
    }

    interface Text {
      id: string;
      date: string;
      isOutcoming?: boolean;
      status: MessageStatus;
      sticker?: Sticker;
      text: string;
    }
  }

  namespace Send {
    interface Root {
      chatId: string;
    }
  }

  interface SendMessageForm {
    message: string;
  }

  namespace Threads {
    interface Item {
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
