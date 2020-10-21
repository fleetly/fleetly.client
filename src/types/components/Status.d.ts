import { Color } from '@fleetly/common/dist/enums';

declare namespace Status {
  interface Classes extends ExtendedClasses {
    dot?: string;
    title?: string;
  }

  interface Props {
    className?: string;
    classes?: Classes;
    color?: Color;
    title?: string;
  }
}

export = Status;
export as namespace Status;
