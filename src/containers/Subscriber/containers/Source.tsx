import { MessagePolicy } from '@fleetly/common/dist/enums';
import moment from 'moment';
import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import Link from '@components/Link';
import Status from '@components/Status';
import { Caption, H3, P } from '@components/Typography';

// Constants
import { MESSAGE_POLICY_STATUS } from '@constants';

// Styles
import styles from './Source.scss';

const SubscriberSource: React.FC<Subscriber.SourceProps> = ({
  id,
  messagePolicy = MessagePolicy.NOT_ALLOWED,
  source
}) => (
  <div className={styles.Root}>
    <Avatar classes={{ root: styles.Avatar }} src={source?.photo} />

    <H3
      className={styles.Name}
    >{`${source?.firstname} ${source?.lastname}`}</H3>

    <Caption className={styles.Id} component="div">{`ID: ${id}`}</Caption>

    <P className={styles.Timezone} component="div">
      {moment().format('HH:mm (UTC Z)')}
    </P>

    <div className={styles.Info}>
      <div>
        <Caption className={styles.Label}>Status</Caption>
        <Status
          {...MESSAGE_POLICY_STATUS[messagePolicy]}
          classes={{ root: styles.Status }}
        />
      </div>

      <div className={styles.InfoDelimiter} />

      <div>
        <Caption className={styles.Label}>Source</Caption>
        <Link to={source?.link}>{source?.type}</Link>
      </div>
    </div>
  </div>
);

export default SubscriberSource;
