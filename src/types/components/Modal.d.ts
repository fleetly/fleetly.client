import * as React from 'react';

declare namespace Modal {
  interface Classes {
    root?: string;
    backdrop?: string;
    container?: string;
    title?: string;
    content?: string;
  }

  interface Props {
    children: React.ReactNode;
    node?: Element | null;
    classes?: Classes;
    title?: string;
    isOpened: boolean;
    handleClose(): void;
  }

  interface IHandleCloseProps {
    closeModal(id: string): void;
    id: string;
  }
}

export = Modal;
export as namespace Modal;
