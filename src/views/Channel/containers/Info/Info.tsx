import * as React from 'react';

// Components
import { Wrapper } from '@components/Page';

// Containers
import Secret from './containers/Secret';
import Source from './containers/Source';
import Webhook from './containers/Webhook';

// Interfaces
import { IChannel } from '@interfaces/channel.interface';

// Styles
import styles from './Info.scss';

const ChannelInfo: React.FC<IChannel> = ({ source, webhook }) => (
  <Wrapper classes={{ container: styles.Root }} title="Information">
    <Source {...source} />
    <Secret />
    <Webhook {...webhook} />
  </Wrapper>
);

export default ChannelInfo;
