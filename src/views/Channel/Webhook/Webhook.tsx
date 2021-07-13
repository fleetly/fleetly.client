import classNames from 'classnames';
import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Fleetly
import { Color } from '@fleetly/common/dist/enums';

// Components
import Button from '@components/Button';
import Status from '@components/Status';
import { H5, P } from '@components/Typography';

// Interfaces
import { IWebhook } from '@interfaces/webhook.interface';

// GraphQL
import SET_WEBHOOK from '@graphql/setWebhook.gql';

// Status
import styles from '../Common/common.scss';

// Utils
import { copyToClipboard } from '@utils/clipboard';

const ChannelWebhook: React.FC<IWebhook> = ({ id, status }) => {
  // Setup
  const { channelId } = useParams<{ channelId: string }>();

  // State
  const [isCopied, setCopyState] = useState(false);

  // Mutations
  const [setWebhook, { loading }] = useMutation(SET_WEBHOOK, {
    variables: { channelId }
  });

  // Handlers
  const handleCopyClick = React.useCallback(() => {
    copyToClipboard(`${window.location.origin}/webhooks/${id}`);
    setCopyState(true);
    setTimeout(() => setCopyState(false), 1000);
  }, [id]);

  return (
    <div>
      <div className={styles.Content}>
        <H5 className={styles.Label}>Webhook</H5>
        <Status color={Color.GREEN} title={status} />
        <P className={styles.Description}>
          This is a secret key that gives access to your instant messengers or
          social networks
        </P>
      </div>

      <div className={styles.Actions}>
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

        <Button
          icon="fas fa-redo"
          loaded={loading}
          onClick={setWebhook as any}
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default ChannelWebhook;
