declare namespace Dialog {
  import ICompanySubscriber from '@fleetly/common';
  import IUser from '@interfaces/user.interfaces';

  type Variant = 'comment' | 'incoming' | 'outcoming';

  interface DialogMessageProps {
    date: Date;
    id: string;
    text?: string;
    status?: 'delivered' | 'read' | 'sent';
    variant: Variant;
  }

  interface DialogGroupProps {
    avatar?: string;
    author?: string;
    children: DialogMessageProps[];
    variant: Variant;
  }
}

export = Dialog;
export as namespace Dialog;
