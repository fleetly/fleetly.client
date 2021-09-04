// Interfaces
import { IPayment } from './payment.interface';
import { IPlan } from './plan.interface';

export interface ISubscription {
  readonly id: string;
  readonly endDate?: string;
  readonly next: ISubscriptionNext;
  readonly payments?: IPayment[];
  readonly plan: IPlan;
  readonly startDate: string;
}

export interface ISubscriptionNext {
  readonly plan: IPlan;
  readonly price: number;
}
