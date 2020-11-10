import { MessagePolicy, Source } from '@fleetly/common';

export interface ISubscriber {
  id: string;
  fields: ISubscriberField[];
  messagePolicy: MessagePolicy;
  source: ISubscriberSource;
  tags: string[];
}

export interface ISubscriberField {
  fieldId: string;
  value: string;
}

export interface ISubscriberSource {
  id: string;
  firstname?: string;
  lastname?: string;
  photo?: string;
  type: Source;
  username: string;
}
