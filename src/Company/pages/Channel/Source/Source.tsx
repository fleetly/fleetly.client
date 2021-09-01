import React from 'react';

// Components
import Button from '@components/Button';
import { H5 } from '@components/Typography';
import { ChannelSourceInfo } from './components/Info';

// Hooks
import { useChannelSource } from './Source.hooks';

// Interfaces
import { IChannel } from '@interfaces/channel.interface';

// Status
import styles from './Source.scss';

export const ChannelSource: React.FC<IChannel> = ({ source, status }) => {
  const {
    handleSyncClick,
    handleSwitchClick,
    isActive,
    isLoading,
    syncIsLoading
  } = useChannelSource(status.type);

  return (
    <div className={styles.Section}>
      <div className={styles.Content}>
        <H5 className={styles.Label}>Source</H5>
        <ChannelSourceInfo {...source} />
      </div>

      <div className={styles.Actions}>
        <Button
          color={isActive ? 'red' : 'green'}
          loaded={isLoading}
          onClick={handleSwitchClick}
          variant="outlined"
        >
          {isActive ? 'Switch Off' : 'Switch On'}
        </Button>

        <Button
          classes={{ icon: syncIsLoading ? styles.Spin : undefined }}
          disabled={syncIsLoading}
          icon="fas fa-sync"
          onClick={handleSyncClick}
          variant="outlined"
        />

        <Button
          color="blue"
          icon="fas fa-external-link"
          to={source.link}
          variant="outlined"
        />
      </div>
    </div>
  );
};
