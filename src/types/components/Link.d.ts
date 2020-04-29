declare namespace Link {
  interface Classes {
    root?: string;
  }

  interface Props {
    children: React.ReactNode;
    className?: string;
    classes?: Classes;
    to?: string;
  }
}
