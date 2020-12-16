import * as React from 'react';

// Containers
import Group from './containers/DialogGroup';
import Message from './containers/DialogMessage';
import Title from './containers/DialogTitle';

// Components
import Page, { Wrapper } from '@components/Page';

// Styles
import styles from './Dialog.scss';
import { groupCSS } from 'react-select/src/components/Group';

const TEST = [
  {
    posts: [
      {
        text: '123412341234',
        date: new Date()
      },
      {
        text: '123412341234',
        date: new Date()
      },
      {
        text: '123412341234',
        date: new Date()
      },
      {
        text: '123412341234',
        date: new Date()
      },
      {
        text: '123412341234',
        date: new Date()
      }
    ],
    user: {
      firstname: 'Test',
      lastname: 'Test'
    }
  },
  {
    posts: [
      {
        date: new Date(),
        status: 'read',
        text: '123412341234'
      },
      {
        date: new Date(),
        status: 'read',
        text: '123412341234'
      },
      {
        date: new Date(),
        status: 'delivered',
        text: '123412341234'
      },
      {
        date: new Date(),
        status: 'sent',
        text: '123412341234'
      },
      {
        date: new Date(),
        status: 'sent',
        text: '123412341234'
      }
    ],
    subscriber: {
      firstname: 'Test',
      lastname: 'Read'
    },
    variant: 'sent'
  },
  {
    posts: [
      {
        date: new Date(),
        status: 'read',
        text: '123412341234'
      },
      {
        date: new Date(),
        status: 'read',
        text: '123412341234'
      },
      {
        date: new Date(),
        status: 'delivered',
        text: '123412341234'
      },
      {
        date: new Date(),
        status: 'sent',
        text: '123412341234'
      },
      {
        date: new Date(),
        status: 'sent',
        text: '123412341234'
      }
    ],
    subscriber: {
      firstname: 'Test',
      lastname: 'Delivered'
    },
    variant: 'sent'
  },
  {
    posts: [
      {
        date: new Date(),
        text: '123412341234'
      },
      {
        date: new Date(),
        text: 'eadfasdfrtgdsf'
      },
      {
        date: new Date(),
        text: '123412341234'
      },
      {
        date: new Date(),
        text: '123412341234'
      },
      {
        date: new Date(),
        text:
          '123412341234 sadjfas dfas df asd fas df as df as f weqr fgsa dg sadf g sd fgsd fg sdf gs df g sdf gs dfgsd fg d'
      }
    ],
    subscriber: {
      firstname: 'Test',
      lastname: 'Sent'
    }
  }
];

const Dialog = () => (
  <Page title="Chat">
    <Wrapper classes={{ container: styles.Root }} title="Chat">
      <div className={styles.Chat}>
        <Title />
        <div className={styles.MessageBlock}>
          {TEST.map(({ posts, user, subscriber, variant }, index: number) => (
            <Group
              key={index}
              posts={posts}
              user={user}
              subscriber={subscriber}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  </Page>
);

export default Dialog;
