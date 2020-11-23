import * as React from 'react';

// Components
import { Wrapper } from '@components/Page';

// Containers
import Secret from './Secret';
import Source from './Source';
import Webhook from './Webhook';

// Interfaces
import { IChannel } from '@interfaces/channel.interface';

// Styles
import styles from './common.scss';

const ChannelInfo: React.FC<IChannel> = ({ source, status, webhook }) => (
  <Wrapper classes={{ container: styles.Root }} title="Information">
    <Source source={source} status={status} />
    <Secret />
    <Webhook {...webhook} />
  </Wrapper>
);

export default ChannelInfo;
