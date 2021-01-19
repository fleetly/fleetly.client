import * as React from 'react';
import { matchPath, useLocation } from 'react-router-dom';

// Components
import Page, { Wrapper } from '@components/Page';

// Containers
import Header from './Header';
import Messages from './Messages';

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

  // Data
  const chatId = match?.params?.chatId;

  return (
    <Page title="Chat">
      <Wrapper
        classes={{ root: styles.Root, container: styles.Container }}
        title="Chat"
      >
        {chatId && (
          <>
            <Header chatId={chatId} />
            <Messages chatId={chatId} />
            <div className={styles.Form} />
          </>
        )}
      </Wrapper>
    </Page>
  );
};

export default Chat;
