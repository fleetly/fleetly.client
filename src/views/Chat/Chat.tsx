import * as React from 'react';
import { useQuery } from 'react-apollo';
import { matchPath, useLocation } from 'react-router-dom';

// Components
import Empty from '@components/Empty';
import Loader from '@components/Loader';
import Page, { Wrapper } from '@components/Page';

// Containers
import Header from './Header';
import Messages from './Messages';
import SendForm from './Send';

// GraphQL
import GET_CHAT_BY_ID from './Common/graphql/getChatById.gql';

// Interfaces
import { IChat } from '@interfaces/chat.interface';

// Routes
import routes from '@routes';

// Styles
import styles from './Chat.scss';

const Chat = () => {
  // Setup
  const location = useLocation();
  const match = matchPath<{ chatId: string }>(location.pathname, {
    path: routes.COMPANY.CHAT.DIALOG
  });
  const chatId = match?.params?.chatId;

  // Data
  const { data, loading } = useQuery<{ chat: IChat }>(GET_CHAT_BY_ID, {
    variables: { chatId }
  });

  return (
    <Page title="Chat">
      <Wrapper
        classes={{ root: styles.Root, container: styles.Container }}
        key={chatId}
        title="Chat"
      >
        {!data?.chat && loading ? (
          <Loader />
        ) : (
          <>
            {data?.chat ? (
              <>
                <Header {...data?.chat} />
                <Messages chatId={data?.chat.id} />
                <SendForm {...data?.chat} />
              </>
            ) : (
              <Empty
                description="Select a chat to start messaging."
                icon="fal fa-comments-alt"
                title="Open Dialog"
              />
            )}
          </>
        )}
      </Wrapper>
    </Page>
  );
};

export default Chat;
