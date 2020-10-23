import { Color, FieldType } from '@fleetly/common/dist/enums';

export interface IField {
  id: string;
  description: string;
  title: string;
  type: FieldType;
}

export interface IFieldTypeOption {
  color: Color;
  description: string;
  label: string;
  value: FieldType;
}
