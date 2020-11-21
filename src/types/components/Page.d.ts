import * as React from 'react';

declare namespace Page {
  interface Classes extends ExtendedClasses {
    container?: string;
  }

  interface Breadcrumbs {
    title: string;
    to: string;
  }

  interface Props {
    children: React.ReactNode;
    classes?: Classes;
    title?: string;
  }

  interface BreadcrumbsClasses extends ExtendedClasses {
    icon?: string;
    link?: string;
  }

  interface BreadcrumbsProps {
    classes?: BreadcrumbsClasses;
    data: Breadcrumbs[];
  }

  interface WrapperClasses extends ExtendedClasses {
    actions?: string;
    breadcrumbs?: BreadcrumbsClasses;
    container?: string;
    header?: string;
    title?: string;
  }

  interface WrapperProps {
    actions?: React.ReactNode;
    children: React.ReactNode;
    classes?: WrapperClasses;
    breadcrumbs?: Breadcrumbs[];
    title?: string;
  }
}

export = Page;
export as namespace Page;
