import React, { useMemo } from 'react';
import { useQuery } from 'react-apollo';

// Fleetly
import { PlanType } from '@fleetly/core/interfaces';

// Components
import Modal from '@components/Modal';
import Plan from './Item';

// Constants
import { PLANS_MODAL } from '@constants';

// Data
import { PLANS } from './Plans.data';

// GraphQl
import GET_PLAN_LIST from './Common/graphql/getPlanList.gql';

// Interfaces
import { IPlan } from '@interfaces/plan.interface';

// Styles
import styles from './Plans.scss';
import Loader from '@components/Loader';

const Plans = () => {
  // Data
  const { data, loading } = useQuery<{ plans: IPlan[] }>(GET_PLAN_LIST);

  // Memo
  const plans = useMemo(
    () =>
      (data?.plans &&
        Object.keys(PLANS).map((type) => ({
          type: type as PlanType,
          description: PLANS[type as PlanType].description,
          plans: data?.plans
            .filter((plan) => plan.type === type)
            .sort((a, b) => a.price - b.price) as IPlan[]
        }))) ||
      [],
    [data]
  );

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
        plans.map((plan) => <Plan {...plan} key={plan.type} />)}
    </Modal>
  );
};

export default Plans;
