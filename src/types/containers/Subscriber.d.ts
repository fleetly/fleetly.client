import { Color, MessagePolicy } from '@fleetly/common/dist/enums';

// Interfaces
import { ISubscriberSource } from '@interfaces/subscriber.interface';

declare namespace Subscriber {
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
    fields: {
      id: string;
      color?: Color;
      title: string;
      value?: string;
    }[];
  }

  interface SourceProps {
    id: string;
    messagePolicy: MessagePolicy;
    source: ISubscriberSource;
  }
}

export = Subscriber;
export as namespace Subscriber;
