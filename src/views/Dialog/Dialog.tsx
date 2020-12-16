import * as React from 'react';

// Containers
import Message from './containers/DialogMessage';

// Components
import Page, { Wrapper } from '@components/Page';

// Styles
import styles from './Dialog.scss';

const TEST = [
  {
    date: new Date(),
    text: '20 Freshest Web Designs, September 2019 | Webdesigner Depot',
    user: {
      firstname: 'Test',
      lastname: 'Test'
    }
  },
  {
    date: new Date(),
    status: 'read',
    subscriber: {
      firstname: 'Test',
      lastname: 'Read'
    },
    text: 'Message test read'
  },
  {
    date: new Date(),
    status: 'delivered',
    subscriber: {
      firstname: 'Test',
      lastname: 'Delivered'
    },
    text: 'Message test delivered'
  },
  {
    date: new Date(),
    status: 'sent',
    subscriber: {
      firstname: 'Test',
      lastname: 'Sent'
    },
    text: 'Message test sent'
  }
];

const Dialog = () => (
  <Page title="Chat">
    <Wrapper classes={{ container: styles.Root }} title="Chat">
      <div className={styles.Chat}>
        {TEST.map(({ date, status, subscriber, text, user }, index: number) => (
          <Message
            date={date}
            key={index}
            status={status}
            subscriber={subscriber}
            text={text}
            user={user}
          />
        ))}
      </div>
    </Wrapper>
  </Page>
);

export default Dialog;
