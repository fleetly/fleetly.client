declare namespace Dialog {
  import ICompanySubscriber from '@fleetly/common';
  import IUser from '@interfaces/user.interfaces';

  interface DialogMessageProps {
    date: Date;
    text?: string;
    status?: 'delivered' | 'read' | 'sent';
  }

  interface DialogGroupProps {
    posts: DialogMessageProps[];
    subscriber?: ICompanySubscriber;
    user?: IUser;
    variant?: string;
  }
}

export = Dialog;
export as namespace Dialog;
