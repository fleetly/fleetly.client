// Fleetly
import { SubscriptionStatus } from '@fleetly/core/interfaces';

// Interfaces
import { IPayment } from './payment.interface';
import { IPlan } from './plan.interface';

export interface ISubscription {
  readonly id: string;
  readonly cancelDate?: string;
  readonly next?: ISubscriptionNext;
  readonly payments?: IPayment[];
  readonly plan: IPlan;
  readonly status: SubscriptionStatus;
}

export interface ISubscriptionNext {
  readonly billDate: string;
  readonly price: number;
}
