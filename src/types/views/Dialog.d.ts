declare namespace Dialog {
  type MessageVariant = 'comment' | 'incoming' | 'outcoming';

  interface MessageProps {
    date: Date;
    id: string;
    text?: string;
    status?: 'delivered' | 'read' | 'sent';
    variant: MessageVariant;
  }

  interface GroupProps {
    avatar?: string;
    author: string;
    children: DialogMessageProps[];
    variant: MessageVariant;
  }
}

export = Dialog;
export as namespace Dialog;
