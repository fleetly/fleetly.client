import * as React from 'react';

// Containers
import DateGroup from './components/Date';
import Header from './containers/Header';

// Components
import Page, { Wrapper } from '@components/Page';
import { MessagePolicy, Source } from '@fleetly/common/dist/enums';

// Styles
import styles from './Dialog.scss';

const SUBSCRIBER = {
  id: '12341234',
  source: {
    id: '1123',
    firstname: 'Ivan',
    lastname: 'Vyatkin',
    link: 'https://vk.com',
    photo:
      'https://abakan-news.ru/wp-content/uploads/2018/03/-e1520919096875.jpg',
    type: Source.TELEGRAM,
    username: 'ivan095'
  },
  messagePolicy: MessagePolicy.ALLOWED
};

const Dialog = () => (
  <Page title="Chat">
    <Wrapper classes={{ container: styles.Root }} title="Chat">
      <div className={styles.Chat}>
        <Header subscriber={SUBSCRIBER} />

        <div className={styles.Container}>
          <DateGroup date={new Date()} />
        </div>
      </div>
    </Wrapper>
  </Page>
);

export default Dialog;
