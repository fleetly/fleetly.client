import { FieldType } from '@fleetly/common/dist/enums';
import { InjectedFormProps } from 'redux-form';

// Interfaces
import { IField, IFieldTypeOption } from '@interfaces/field.interface';

declare namespace Fields {
  interface FormValues {
    field: {
      description?: string;
      title: string;
      type: FieldType;
    };
    fieldId: string;
  }

  interface FormProps extends InjectedFormProps<FormValues> {
    fieldTypes: IFieldTypeOption[];
  }

  interface ModalProps {
    initialValues?: FormValues;
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
