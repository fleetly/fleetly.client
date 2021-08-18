import React from 'react';

// Components
import Modal from '@components/Modal';
import Plan from './Item';

// Constants
import { PLANS_MODAL } from '@constants';

// Data
import { PLANS } from './Plans.data';

// Styles
import styles from './Plans.scss';

const Plans = () => {
  return (
    <Modal
      classes={{
        backdrop: styles.Backdrop,
        container: styles.Container,
        content: styles.Content
      }}
      id={PLANS_MODAL}
    >
      {PLANS.map((plan) => (
        <Plan {...plan} key={plan.type} />
      ))}
    </Modal>
  );
};

export default Plans;
