import * as React from 'react';
import { matchPath, useLocation } from 'react-router-dom';

// Containers
import DateGroup from './components/Date';
import Header from './containers/Header';

// Components
import Page, { Wrapper } from '@components/Page';
import { MessagePolicy } from '@fleetly/common/dist/enums';
import { OpenDialog } from '@components/Empty';

// Styles
import styles from './Dialog.scss';

// Routes
import routes from '@routes';

const SUBSCRIBER = {
  id: '12341234',
  source: {
    id: '1123',
    firstname: 'Ivan',
    lastname: 'Vyatkin',
    link: 'https://vk.com',
    photo:
      'https://abakan-news.ru/wp-content/uploads/2018/03/-e1520919096875.jpg',
    type: 'VK',
    username: 'ivan095'
  },
  messagePolicy: MessagePolicy.ALLOWED
};

const Dialog = () => {
  const location = useLocation();
  const match = matchPath<{ chatId: string }>(location.pathname, {
    path: routes.COMPANY.CHAT.DIALOG
  });

  const chatId = match?.params?.chatId;

  return (
    <Page title="Chat">
      <Wrapper classes={{ container: styles.Root }} title="Chat">
        {chatId ? (
          <div className={styles.Chat}>
            <Header subscriber={SUBSCRIBER} />

            <div className={styles.Container}>
              <DateGroup date={new Date()} />
            </div>

            <div className={styles.Send}>Send</div>
          </div>
        ) : (
          <OpenDialog />
        )}
      </Wrapper>
    </Page>
  );
};

export default Dialog;
