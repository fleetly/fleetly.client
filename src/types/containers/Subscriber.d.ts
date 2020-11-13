import { Color, MessagePolicy } from '@fleetly/common/dist/enums';

// Interfaces
import { IField, IFieldTypeOption } from '@interfaces/field.interface';
import {
  ISubscriberField,
  ISubscriberSource
} from '@interfaces/subscriber.interface';

declare namespace Subscriber {
  interface AddTagFormProps {
    options: {
      color: Color;
      label: string;
      value: string;
    }[];
  }

  interface AddTagFormValues {
    tagId: string;
  }

  interface FieldProps {
    color?: Color;
    id: string;
    onClick?(fieldId: string, fieldTitle: string, value?: string): void;
    onRemove?(fieldId: string): void;
    title: string;
    value?: string;
  }

  interface FieldModalData {
    fieldId: string;
    fieldTitle: string;
    value?: string;
  }

  interface FieldsProps {
    fields: IField[];
    fieldTypes: IFieldTypeOption[];
    values: ISubscriberField[];
  }

  interface SourceProps {
    id: string;
    messagePolicy: MessagePolicy;
    source: ISubscriberSource;
  }

  interface TagProps {
    id: string;
    color: Color;
    onRemove?(event: React.SyntheticEvent<HTMLButtonElement>): void;
    title: string;
  }

  interface TagsProps {
    tags: ITag[];
    values: string[];
  }
}

export = Subscriber;
export as namespace Subscriber;
