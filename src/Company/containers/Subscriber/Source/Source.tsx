import moment from 'moment';
import React, { useContext } from 'react';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import Link from '@components/Link';
import Status from '@components/Status';
import { H3, Text } from '@components/Typography';

// Constants
import { MESSAGE_POLICY_STATUS } from '@constants';

// Contexts
import { SubscriberContext } from '../Subscriber';

// Interfaces
import { ISubscriber } from '@interfaces/subscriber.interface';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Source.scss';

// Utils
import { fillUrl } from '@utils/url';

export const SubscriberSource: React.FC<ISubscriber> = ({
  id,
  messagePolicy,
  source: { firstname, lastname, link, photo, type }
}) => {
  // Setup
  const { companyId } = useContext(SubscriberContext);

  return (
    <div className={styles.Root}>
      <Avatar className={styles.Avatar} aura src={photo} />

      <H3 className={styles.Name}>{`${firstname} ${lastname}`}</H3>

      <Text
        className={styles.Id}
        component="div"
        size="small"
        weight="semiBold"
      >{`ID: ${id}`}</Text>

      <Text className={styles.Timezone} component="div">
        {moment().format('HH:mm (UTC Z)')}
      </Text>

      <div className={styles.Info}>
        <div>
          <Text className={styles.Label} size="small">
            Status
          </Text>
          <Status
            {...MESSAGE_POLICY_STATUS[messagePolicy]}
            classes={{ root: styles.Status }}
          />
        </div>

        <div className={styles.InfoDelimiter} />

        <div>
          <Text className={styles.Label} size="small">
            Source
          </Text>
          <Link to={link}>{type}</Link>
        </div>
      </div>

      <div className={styles.Actions}>
        <Button
          color="blue"
          fullWidth
          to={fillUrl(ROUTES.COMPANY.CHAT.DIALOG, {
            chatId: id,
            companyId
          })}
        >
          Start Chat
        </Button>

        <Button color="red" disabled fullWidth>
          Block
        </Button>
      </div>
    </div>
  );
};
