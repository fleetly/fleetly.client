declare namespace Dialog {
  import ICompanySubscriber from '@fleetly/common';
  import IUser from '@interfaces/user.interfaces';

  interface DialogMessageProps {
    date: Date;
    id: number;
    text?: string;
    status?: 'delivered' | 'read' | 'sent';
  }

  interface DialogGroupProps {
    author: {
      subscriber?: ICompanySubscriber;
      user?: IUser;
    };
    posts: DialogMessageProps[];
    variant?: string;
  }
}

export = Dialog;
export as namespace Dialog;
