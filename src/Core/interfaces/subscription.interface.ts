// Interfaces
import { IPayment } from './payment.interface';
import { IPlan } from './plan.interface';
import { ITraffic } from './traffic.interface';

export interface ISubscription {
  readonly id: string;
  readonly endDate?: string;
  readonly next: ISubscriptionNext;
  readonly payments?: IPayment[];
  readonly plan: IPlan;
  readonly startDate: string;
  readonly traffic: ITraffic[];
}

export interface ISubscriptionNext {
  readonly plan: IPlan;
  readonly price: number;
}
