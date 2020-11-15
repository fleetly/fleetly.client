declare namespace Menu {
  interface Classes extends ExtendedClasses {
    group?: string;
    icon?: string;
    link?: string;
    list?: string;
    title?: string;
  }

  interface Group {
    children: Item[];
    title?: string;
  }

  interface Item {
    exact?: boolean;
    icon?: string;
    title: string;
    to: string;
  }

  interface Props {
    classes?: Classes;
    className?: string;
    data: Group[];
  }
}

export = Menu;
export as namespace Menu;
