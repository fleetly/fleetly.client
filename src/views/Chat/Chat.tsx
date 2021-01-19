import * as React from 'react';
import { matchPath, useLocation } from 'react-router-dom';

// Components
import Page, { Wrapper } from '@components/Page';
import { OpenDialog } from '@components/Empty';

// Containers
import Header from './Header';

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
      <Wrapper title="Chat">
        {chatId ? (
          <>
            <div className={styles.Header}>
              <Header chatId={chatId} key={chatId} />
            </div>

            <div className={styles.Messages}>123</div>
          </>
        ) : (
          <OpenDialog />
        )}
      </Wrapper>
    </Page>
  );
};

export default Chat;
