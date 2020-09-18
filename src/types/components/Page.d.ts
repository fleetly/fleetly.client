import * as React from 'react';

declare namespace Page {
  interface Classes extends ExtendedClasses {
    container?: string;
  }

  interface Props {
    children: React.ReactNode;
    classes?: Classes;
    title?: string;
  }

  namespace Wrapper {
    interface Classes extends ExtendedClasses {
      actions?: string;
      container?: string;
      header?: string;
      title?: string;
    }

    interface Props {
      actions?: React.ReactNode;
      children: React.ReactNode;
      classes?: Classes;
      title?: string;
    }
  }
}

export = Page;
export as namespace Page;
