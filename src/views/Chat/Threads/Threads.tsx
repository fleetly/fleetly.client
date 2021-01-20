import * as React from 'react';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Fleetly
import { ChatStatus } from '@fleetly/chat/dist/common/interfaces';

// Containers
import Button from '@components/Button';
import Empty from '@components/Empty';

// Components
import Thread from './components/Item';

// GraphQL
import GET_CHAT_LIST from './graphql/getChatList.gql';

// Interfaces
import { IChat } from '@interfaces/chat.interface';

// Styles
import styles from './Threads.scss';

const Threads = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();

  // State
  const [status, setStatus] = React.useState(ChatStatus.OPENED);

  // Data
  const { data } = useQuery<{ chats: IChat[] }>(GET_CHAT_LIST, {
    variables: { companyId, status }
  });

  const sortedList = React.useMemo(
    () =>
      (data?.chats || []).sort((a, b) =>
        a.lastMessage.date < b.lastMessage.date
          ? 1
          : a.lastMessage.date > b.lastMessage.date
          ? -1
          : 0
      ),
    [data]
  );

  // Handlers
  const handleStatusChange = React.useCallback(
    () =>
      setStatus(
        status === ChatStatus.OPENED ? ChatStatus.CLOSED : ChatStatus.OPENED
      ),
    [status]
  );

  return (
    <div className={styles.Root}>
      <div className={styles.Actions}>
        <div className={styles.Search}>
          <Button
            className={styles.SearchTrigger}
            classes={{ root: styles.Find, icon: styles.FindIcon }}
            icon="far fa-search"
            variant="outlined"
          />
        </div>

        <div className={styles.Status}>
          <Button
            className={styles.Action}
            color={status === ChatStatus.OPENED ? 'primary' : 'default'}
            onClick={handleStatusChange}
            variant={status === ChatStatus.OPENED ? 'filled' : 'outlined'}
          >
            Opened
          </Button>

          <Button
            className={styles.Action}
            color={status === ChatStatus.CLOSED ? 'primary' : 'default'}
            onClick={handleStatusChange}
            variant={status === ChatStatus.CLOSED ? 'filled' : 'outlined'}
          >
            Closed
          </Button>
        </div>
      </div>

      <div className={styles.Container}>
        {sortedList.length > 0 ? (
          <div className={styles.List}>
            {sortedList.map((chat) => (
              <Thread key={chat.id} {...chat} />
            ))}
          </div>
        ) : (
          <Empty
            icon="fal fa-check-circle fa-5x"
            text="You have closed all open dialogs."
            title="All Close"
          />
        )}
      </div>
    </div>
  );
};

export default Threads;
