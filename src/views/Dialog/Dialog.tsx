import * as React from 'react';

// Containers
import Message from './containers/DialogMessage';

// Components
import Page, { Wrapper } from '@components/Page';

// Styles
import styles from './Dialog.scss';

const TEST = [
  {
    user: {
      firstname: 'Test',
      lastname: 'Test'
    },
    text: '20 Freshest Web Designs, September 2019 | Webdesigner Depot',
    date: '15:56'
  },
  {
    user: {
      firstname: 'Test',
      lastname: 'Read'
    },
    text: 'Message test read',
    date: '15:56',
    status: 'read'
  },
  {
    user: {
      firstname: 'Test',
      lastname: 'Delivered'
    },
    text: 'Message test delivered',
    date: '15:56',
    status: 'delivered'
  },
  {
    user: {
      firstname: 'Test',
      lastname: 'Sent'
    },
    text: 'Message test sent',
    date: '15:56',
    status: 'sent'
  }
];

const Dialog = () => (
  <Page title="Chat">
    <Wrapper classes={{ container: styles.Root }} title="Chat">
      <div className={styles.Chat}>
        {TEST.map(({ user, text, date, status }, index: number) => (
          <Message
            key={index}
            user={user}
            text={text}
            date={date}
            status={status}
          />
        ))}
      </div>
    </Wrapper>
  </Page>
);

export default Dialog;
