import * as React from 'react';

// Components
import Button from '@components/Button';
import { H5 } from '@components/Typography';

import SourceInfo from './components/Info';

// Hooks
import { useChannelInfoSourceView } from './Source.hooks';

// Status
import styles from './Source.scss';

const ChannelSource: React.FC<Channel.SourceProps> = ({ source, status }) => {
  const {
    handleSyncClick,
    handleSwitchClick,
    isActive,
    isLoading,
    syncIsLoading
  } = useChannelInfoSourceView(status.type);

  return (
    <div>
      <div className={styles.Content}>
        <H5 className={styles.Label}>Source</H5>
        <SourceInfo {...source} />
      </div>

      <div className={styles.Actions}>
        <Button
          color={isActive ? 'danger' : 'success'}
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
          color="primary"
          icon="fas fa-external-link"
          to={source.link}
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default ChannelSource;
