import { ChannelStatus } from '@fleetly/common/dist/interfaces';

// Interfaces
import { IChannelSource } from '@interfaces/channel.interface';
import { IStatus } from '@interfaces/status.interface';

declare namespace Channel {
  interface SourceProps extends IChannel {
    source: IChannelSource;
    status: IStatus<ChannelStatus>;
  }

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

  interface Token {
    newToken: string;
  }
}

export = Channel;
export as namespace Channel;
