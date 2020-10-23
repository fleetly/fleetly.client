import { InjectedFormProps } from 'redux-form';

// Interfaces
import { IField, IFieldTypeOption } from '@interfaces/field.interface';

declare namespace Fields {
  interface FormProps extends InjectedFormProps<IField> {
    fieldTypes: IFieldTypeOption[];
  }

  interface TableProps {
    data: IField[];
    fieldTypes: IFieldTypeOption[];
    onDelete(id: string): void;
    onEdit(field: IField): void;
  }
}

export = Fields;
export as namespace Fields;
