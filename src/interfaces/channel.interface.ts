import { ChannelStatus, Source } from '@fleetly/common';

// Interfaces
import { IStatus } from '@interfaces/status.interface';
import { IWebhook } from '@interfaces/webhook.interface';

export interface IChannel {
  id: string;
  source: IChannelSource;
  status: IStatus<ChannelStatus>;
  webhook: IWebhook;
}

export interface IChannelSource {
  id: string;
  link: string;
  name: string;
  photo?: string;
  title: string;
  type: Source;
}
