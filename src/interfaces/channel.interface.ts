import { Source } from '@fleetly/common';

export interface IChannel {
  id: string;
  source: IChannelSource;
}

export interface IChannelSource {
  id: string;
  name: string;
  photo: string;
  title: string;
  type: Source;
}
