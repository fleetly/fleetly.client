declare namespace Dialog {
  type MessageVariant = 'comment' | 'incoming' | 'outcoming';

  interface Author {
    firstname?: string;
    lastname?: string;
    photo?: string;
    username?: string;
  }

  interface MessageProps {
    author?: Author;
    chatId?: string;
    date?: Date;
    id?: string;
    isComment?: boolean;
    isIncoming?: boolean;
    status?: 'delivered' | 'read' | 'sent';
    text?: string;
  }

  interface GroupProps {
    author?: Author;
    isIncoming?: boolean;
    messages?: MessageProps[];
    variant?: MessageVariant;
    status?: string;
  }
}

export = Dialog;
export as namespace Dialog;
