import { Source } from '@fleetly/common';

export interface ISubscriber {
  id: string;
  source: ISubscriberSource;
}

export interface ISubscriberSource {
  id: string;
  firstname?: string;
  lastname?: string;
  photo?: string;
  type: Source;
  username: string;
}
