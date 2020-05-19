import * as React from 'react';

declare namespace Modal {
  interface Classes extends ExtendedClasses {
    backdrop?: string;
    container?: string;
    title?: string;
    content?: string;
  }

  interface Props {
    children: React.ReactNode;
    data?: Map<string, any>;
    classes?: Classes;
    id: string;
    isOpened?: boolean;
    onClose?(event: React.SyntheticEvent<HTMLDivElement>): void;
    // handleClose(): void;
    title?: string;
  }

  interface IHandleCloseProps {
    closeModal(id: string): void;
    id: string;
  }
}

export = Modal;
export as namespace Modal;
