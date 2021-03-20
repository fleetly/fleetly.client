import { Color } from '@fleetly/common/dist/enums';
import * as React from 'react';

// Components
import Badge from '../Badge';

// Styles
import styles from './Threads.scss';

const DATA = [
  {
    id: 1,
    title: 'Only Title'
  },
  {
    color: Color.GREEN,
    icon: 'fas fa-check',
    id: 2,
    title: 'Check'
  },
  {
    color: Color.YELLOW,
    icon: 'fas fa-exclamation',
    id: 3,
    title: 'Exclamation mark',
    description: 'Exclamation mark! Exclamation mark! Exclamation mark! Exclamation mark! Exclamation mark! Exclamation mark! Exclamation mark! '
  },
  {
    color: Color.RED,
    icon: 'fas fa-ban',
    id: 3,
    title: 'Danger!',
    description: 'Ban'
  },
  {
    color: Color.YELLOW,
    id: 3,
    title: 'Badge without description and with a very long title.',
  }
];

const Threads = () => (
  <div className={styles.Root}>
    <div className={styles.Header}>
      Header
    </div>
    <div className={styles.Container}>
      {DATA.map((item) => <Badge key={item.id} {...item} />)}
    </div>
  </div>
);

export default Threads;
