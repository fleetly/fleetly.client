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
      messages: Text[];
    }

    interface Text {
      date: string;
      isIncoming?: boolean;
      status: MessageStatus;
      text: string;
    }
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
