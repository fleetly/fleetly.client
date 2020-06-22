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
}

export = Page;
export as namespace Page;
