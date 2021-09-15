// Fleetly
import { MessagePolicy } from '@fleetly/common';
import { ChannelSource } from '@fleetly/provider/interfaces';

export interface ISubscriber {
  id: string;
  fields?: ISubscriberField[];
  messagePolicy: MessagePolicy;
  source: ISubscriberSource;
  tags?: string[];
}

export interface ISubscriberField {
  fieldId: string;
  value: string;
}

export interface ISubscriberSource {
  id: string;
  firstname?: string;
  lastname?: string;
  link: string;
  photo?: string;
  type: ChannelSource;
  username: string;
}
