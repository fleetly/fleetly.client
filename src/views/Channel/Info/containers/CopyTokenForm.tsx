import classNames from 'classnames';
import * as React from 'react';

// Components
import Button from '@components/Button';

// Hooks
import { useInfo } from '../Info.hooks';

// Typography
import { P } from '@components/Typography';

// Styles
import styles from './CopyToken.scss';

// Utils
import { copyToClipboard } from '@utils/clipboard';

const CopyToken = () => {
  const { channelToken } = useInfo();

  // State
  const [isCopied, setCopyState] = React.useState(false);

  // Handlers
  const handleCopyClick = React.useCallback(() => {
    copyToClipboard(channelToken);
    setCopyState(true);
    setTimeout(() => setCopyState(false), 1000);
  }, [channelToken]);

  return (
    <div className={styles.Root}>
      <P className={styles.Description}>
        Be careful, not to share the token with unauthorized persons.
      </P>
      <div className={styles.Token}>{channelToken}</div>
      <Button
        color="primary"
        icon={classNames('far', {
          'fa-clipboard': !isCopied,
          'fa-clipboard-check': isCopied
        })}
        onClick={handleCopyClick}
        variant="outlined"
      >
        Copy
      </Button>
    </div>
  );
};

export default CopyToken;
