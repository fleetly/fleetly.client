import * as React from 'react';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Containers
import Button from '@components/Button';

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

  // Data
  const { data } = useQuery<{ chats: IChat[] }>(GET_CHAT_LIST, {
    variables: { companyId }
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
          <Button className={styles.Action} color="primary">
            Opened
          </Button>

          <Button className={styles.Action} variant="outlined">
            Closed
          </Button>
        </div>
      </div>

      {sortedList.length > 0 && (
        <div className={styles.Container}>
          {sortedList.map((chat) => (
            <Thread key={chat.id} {...chat} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Threads;
