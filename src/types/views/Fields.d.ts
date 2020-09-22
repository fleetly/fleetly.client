declare namespace Fields {
  import IField from '@interfaces/field.interface';

  namespace Table {
    interface Props {
      data: IField[];
      onDelete?(id: string): void;
      onEdit?(field: IField): void;
    }
  }
}

export = Fields;
export as namespace Fields;
