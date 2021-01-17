import * as React from 'react';
import { useQuery } from 'react-apollo';
import { matchPath, useLocation } from 'react-router-dom';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';

// GraphQL
import GET_CHAT_BY_ID from './graphql/getChatById.gql';

// Routes
import routes from '@routes';

// Styles
import styles from './Header.scss';
import { IChat } from '@interfaces/chat.interface';

const DialogHeader: React.FC<{}> = () => {
  // Setup
  const location = useLocation();
  const match = matchPath<{ chatId: string }>(location.pathname, {
    path: routes.COMPANY.CHAT.DIALOG
  });

  // Data
  const { data } = useQuery<{ chat: IChat }>(GET_CHAT_BY_ID, {
    variables: { chatId: match?.params.chatId }
  });

  const { firstname, lastname, photo, type } =
    data?.chat.subscriber.source || {};

  return (
    <div className={styles.Root}>
      {data?.chat.subscriber && (
        <div className={styles.Subscriber}>
          <Avatar src={photo} sourceType={type} />

          <div className={styles.Name}>
            {firstname} {lastname}
          </div>
        </div>
      )}

      <div className={styles.Actions}>
        <Button
          className={styles.Action}
          icon="far fa-search"
          variant="outlined"
        />
        <Button
          className={styles.Action}
          icon="far fa-bell"
          variant="outlined"
        />

        <Button className={styles.Confirm} color="primary">
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default DialogHeader;
