import React from 'react';

// Components
import Loader from '@components/Loader';
import Modal from '@components/Modal';

import Plan from './Item';

// Constants
import { PLANS_MODAL } from '@constants';

// Hooks
import { usePlansContainer } from './Plans.hooks';

// Styles
import styles from './Plans.scss';

const Plans = () => {
  const { handleClick, loading, plans, subscription } = usePlansContainer();

  return (
    <Modal
      classes={{
        backdrop: styles.Backdrop,
        container: styles.Container,
        content: styles.Content
      }}
      id={PLANS_MODAL}
    >
      {loading && <Loader />}

      {plans &&
        plans.length > 0 &&
        plans.map((plan) => (
          <Plan
            {...plan}
            key={plan.type}
            onClick={handleClick}
            subscription={subscription}
          />
        ))}
    </Modal>
  );
};

export default Plans;
