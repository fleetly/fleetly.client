import moment from 'moment';
import * as React from 'react';
import { useQuery } from 'react-apollo';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import Link from '@components/Link';
import Status from '@components/Status';
import { Caption, H3, P } from '@components/Typography';

// Constants
import { MESSAGE_POLICY_STATUS } from '@constants';

// GraphQL
import GET_SUBSCRIBER_BY_ID from './graphql/getSubscriberById.gql';

// Styles
import styles from './Subscriber.scss';

const Subscriber = () => {
  const { data } = useQuery(GET_SUBSCRIBER_BY_ID, {
    variables: { subscriberId: '5fa43a8c772c06518c761998' }
  });

  return (
    <div className={styles.Root}>
      <Button
        classes={{ root: styles.Close }}
        icon="fas fa-times"
        variant="outlined"
      />

      <div className={styles.Content}>
        <Avatar
          classes={{ root: styles.Avatar }}
          src={data?.subscriber?.source?.photo}
        />

        <H3
          className={styles.Name}
        >{`${data?.subscriber?.source?.firstname} ${data?.subscriber?.source?.lastname}`}</H3>

        <Caption
          className={styles.Id}
          component="div"
        >{`ID: ${data?.subscriber?.id}`}</Caption>

        <P className={styles.Timezone} component="div">
          {moment().format('HH:mm (UTC Z)')}
        </P>

        <div className={styles.Info}>
          <div>
            <Caption className={styles.Label}>Status</Caption>
            <Status
              {...MESSAGE_POLICY_STATUS[data?.subscriber?.messagePolicy]}
              classes={{ root: styles.Status }}
            />
          </div>

          <div className={styles.InfoDelimiter} />

          <div>
            <Caption className={styles.Label}>Source</Caption>
            <Link to="/">{data?.subscriber?.source?.type}</Link>
          </div>
        </div>

        <div className={styles.Actions}>
          <Button color="primary" fullWidth>
            Start Chat
          </Button>

          <Button color="danger" disabled fullWidth>
            Block
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
