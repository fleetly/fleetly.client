// Interfaces
// import { IChannel, IChannelSource } from '@interfaces/channel.interface';
// import { IWebhook } from '@interfaces/webhook.interface';

declare namespace Channel {
  // interface InfoProps extends IChannel {}
  // interface InfoSourceProps extends IChannelSource {}
  // interface InfoWebhookProps extends IWebhook {}

  interface FormValues {
    sourceType: string;
    token: string;
  }

  interface SourceListItem {
    id: string;
    icon: string;
    isDisabled?: boolean;
    title: string;
  }
}

export = Channel;
export as namespace Channel;
