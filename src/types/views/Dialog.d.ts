declare namespace Dialog {
  type MessageVariant = 'comment' | 'incoming' | 'outcoming';

  interface MessageProps {
    author?: string;
    date: Date;
    id: string;
    status?: 'delivered' | 'read' | 'sent';
    text?: string;
    variant?: MessageVariant;
  }

  interface GroupProps {
    avatar?: string;
    author?: string;
    children: DialogMessageProps[];
    variant: MessageVariant;
  }
}

export = Dialog;
export as namespace Dialog;
