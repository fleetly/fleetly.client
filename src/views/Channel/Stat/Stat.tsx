import * as React from 'react';
import { useParams } from 'react-router-dom';

// Components
import { Wrapper } from '@components/Page';
import SubChart from './components/SubChart';

// Interfaces
import { IChannel } from '@interfaces/channel.interface';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Stat.scss';

// Utils
import { fillUrl } from '@utils/url';

const ChannelStat: React.FC<IChannel> = ({ source }) => {
  // Setup
  const { channelId, companyId } = useParams<{
    channelId: string;
    companyId: string;
  }>();

  return (
    <Wrapper
      breadcrumbs={[
        {
          title: 'Channels',
          to: fillUrl(ROUTES.COMPANY.CHANNELS, { companyId })
        },
        {
          title: source.title,
          to: fillUrl(ROUTES.COMPANY.CHANNEL, { channelId, companyId })
        }
      ]}
      classes={{ actions: styles.Actions, container: styles.Container }}
    >
      <SubChart title="Messages" value={182} />
      <SubChart title="Subscribers" value={32} />

      <SubChart title="Graph" value={32} />
    </Wrapper>
  );
};

export default ChannelStat;
