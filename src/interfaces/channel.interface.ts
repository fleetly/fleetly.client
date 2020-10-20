import { ChannelStatus, Source } from '@fleetly/common';

// Interface
import { IStatus } from '@interfaces/status.interface';

export interface IChannel {
  id: string;
  source: IChannelSource;
  status: IStatus<ChannelStatus>;
}

export interface IChannelSource {
  id: string;
  link: string;
  name: string;
  photo?: string;
  title?: string;
  type: Source;
}
