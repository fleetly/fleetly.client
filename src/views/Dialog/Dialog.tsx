import * as React from 'react';

// Containers
import Header from './containers/Header';
import Group from './containers/Group';

// Components
import Page, { Wrapper } from '@components/Page';

// Styles
import styles from './Dialog.scss';

const TEST = [
  {
    author: 'Test Test',
    children: [
      {
        date: new Date(),
        id: 1,
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 2,
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 3,
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 4,
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 5,
        text: '123412341234'
      }
    ],
    variant: 'incoming'
  },
  {
    author: 'Test Read',
    children: [
      {
        date: new Date(),
        id: 6,
        status: 'read',
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 7,
        status: 'read',
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 8,
        status: 'delivered',
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 9,
        status: 'sent',
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 10,
        status: 'sent',
        text: '123412341234'
      }
    ],

    variant: 'outcoming'
  },
  {
    author: 'Test Delivered',
    children: [
      {
        date: new Date(),
        id: 11,
        status: 'read',
        text:
          '123412341234 sadjfas dfas df asd fas df as df as f weqr fgsa dg sadf g sd fgsd fg sdf gs df g sdf gs dfgsd fg d 123412341234 sadjfas dfas df asd fas df as df as f weqr fgsa dg sadf g sd fgsd fg sdf gs df g sdf gs dfgsd fg d'
      },
      {
        date: new Date(),
        id: 12,
        status: 'read',
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 13,
        status: 'delivered',
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 14,
        status: 'sent',
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 15,
        status: 'sent',
        text:
          '123412341234 sadjfas dfas df asd fas df as df as f weqr fgsa dg sadf g sd fgsd fg sdf gs df g sdf gs dfgsd fg d 123412341234 sadjfas dfas df asd fas df as df as f weqr fgsa dg sadf g sd fgsd fg sdf gs df g sdf gs dfgsd fg d'
      }
    ],
    variant: 'outcoming'
  },
  {
    author: 'Test Sent',
    children: [
      {
        date: new Date(),
        id: 16,
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 17,
        text: 'eadfasdfrtgdsf'
      },
      {
        date: new Date(),
        id: 18,
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 19,
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 20,
        text:
          '123412341234 sadjfas dfas df asd fas df as df as f weqr fgsa dg sadf g sd fgsd fg sdf gs df g sdf gs dfgsd fg d 123412341234 sadjfas dfas df asd fas df as df as f weqr fgsa dg sadf g sd fgsd fg sdf gs df g sdf gs dfgsd fg d'
      }
    ],
    variant: 'incoming'
  },
  {
    author: 'Test Comment',
    children: [
      {
        date: new Date(),
        id: 21,
        text:
          '123412341234 sadjfas dfas df asd fas df as df as f weqr fgsa dg sadf g sd fgsd fg sdf gs df g sdf gs dfgsd fg d 123412341234 sadjfas dfas df asd fas df as df as f weqr fgsa dg sadf g sd fgsd fg sdf gs df g sdf gs dfgsd fg d'
      },
      {
        date: new Date(),
        id: 21,
        text:
          '123412341234 sadjfas dfas df asd fas df as df as f weqr fgsa dg sadf g sd fgsd fg sdf gs df g sdf gs dfgsd fg d 123412341234 sadjfas dfas df asd fas df as df as f weqr fgsa dg sadf g sd fgsd fg sdf gs df g sdf gs dfgsd fg d'
      }
    ],
    variant: 'comment'
  }
];

const Dialog = () => (
  <Page title="Chat">
    <Wrapper classes={{ container: styles.Root }} title="Chat">
      <div className={styles.Chat}>
        <Header />
        <div className={styles.Message}>
          {TEST.map((item: any, index: number) => (
            <Group {...item} key={index} />
          ))}
        </div>
      </div>
    </Wrapper>
  </Page>
);

export default Dialog;
