declare namespace Tabs {
  interface Classes extends ExtendedClasses {
    tab?: string;
  }

  interface Props {
    children: React.ReactNode;
    classes?: Classes;
    onSelect?(value: any): void;
    value: any;
  }

  interface TabProps {
    classes?: ExtendedClasses;
    label: string;
    onClick?(event: React.SyntheticEvent<HTMLDivElement>): void;
    selected?: boolean;
    value: any;
  }
}
