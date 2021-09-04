import { ApolloError, useMutation, useQuery } from '@apollo/client';
import { useCallback, useMemo } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

// Fleetly
import { PlanType } from '@fleetly/core/interfaces';

// Constants
import { PLANS_MODAL } from '@constants';

// Data
import { PLANS } from './Plans.data';

// GraphQl
import GET_PLAN_LIST from './Common/graphql/getPlanList.gql';

import BUY_SUBSCRIPTION from './Common/graphql/buySubscription.gql';
import CANCEL_SUBSCRIPTION from './Common/graphql/cancelSubscription.gql';
import UPGRADE_SUBSCRIPTION from './Common/graphql/upgradeSubscription.gql';

// Interfaces
import { IPlan } from '@interfaces/plan.interface';
import { ISubscription } from '@interfaces/subscription.interface';

// Routes
import ROUTES from '@routes';

// Store
import { useModals, useNotifications, useSession } from '@store';

const usePlansContainer = (subscription?: ISubscription) => {
  // Setup
  const history = useHistory();
  const { closeModal } = useModals(PLANS_MODAL);
  const { handleApolloError } = useNotifications();
  const { isAuthorized } = useSession();
  const match = useRouteMatch<{ companyId: string }>('/:companyId');

  const companyId = match?.params.companyId;

  // Data
  const { data, loading } = useQuery<{ plans: IPlan[] }>(GET_PLAN_LIST);

  // Mutations
  const [buySubscription] = useMutation<{ buySubscription: string }>(
    BUY_SUBSCRIPTION
  );
  const [cancelSubscription] = useMutation(CANCEL_SUBSCRIPTION);
  const [upgradeSubscription] = useMutation(UPGRADE_SUBSCRIPTION);

  // Handlers
  const handleClick = useCallback(
    async (event: React.SyntheticEvent<HTMLButtonElement>) => {
      if (!isAuthorized) {
        history.push(ROUTES.SIGN.UP);
      } else {
        try {
          const planId = event.currentTarget.dataset.planId!;

          if (subscription?.next.plan.id === planId) {
            await cancelSubscription({ variables: { companyId } });
          } else if (subscription?.next.plan.type !== PlanType.LITE) {
            await upgradeSubscription({ variables: { companyId, planId } });
          } else {
            const { data } = await buySubscription({
              variables: { companyId, planId }
            });

            await new Promise((resolve) => {
              (window as any).Paddle.Checkout.open({
                override: data?.buySubscription,
                successCallback: () => {
                  resolve(true);
                  window.location.reload();
                }
              });
            });
          }
        } catch (error) {
          handleApolloError(error as ApolloError);
        }
      }

      closeModal();
    },
    [
      buySubscription,
      cancelSubscription,
      closeModal,
      companyId,
      handleApolloError,
      history,
      isAuthorized,
      subscription,
      upgradeSubscription
    ]
  );

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

  return {
    handleClick,
    loading,
    plans
  };
};

export { usePlansContainer };
