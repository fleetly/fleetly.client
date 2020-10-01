import { FieldType } from '@fleetly/common';

export interface IField {
  id: string;
  description: string;
  title: string;
  type: FieldType;
}
