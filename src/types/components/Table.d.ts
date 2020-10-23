import { Column } from 'react-table';

declare namespace Table {
  interface Classes extends ExtendedClasses {
    tbody?: string;
    td?: string;
    thead?: string;
    tr?: string;
  }

  interface Props {
    classes?: Classes;
    columns: Column[];
    data: any[];
    onTrClick?(event: any): void;
  }
}

export = Table;
export as namespace Table;
