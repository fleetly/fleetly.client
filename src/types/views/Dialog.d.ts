declare namespace Dialog {
  import ICompanySubscriber from '@fleetly/common';
  import IUser from '@interfaces/user.interfaces';

  interface DialogMessageProps {
    date: Date;
    text?: string;
    status?: 'delivered' | 'read' | 'sent';
    subscriber?: ICompanySubscriber;
    user?: IUser;
  }
}

export = Dialog;
export as namespace Dialog;
