// Fleetly
import { PaymentStatus, PaymentType } from '@fleetly/core/dist/common';

export interface IPayment {
  readonly id: string;
  readonly amount: number;
  readonly checkoutId: string;
  readonly orderId: string;
  readonly receiptUrl: string;
  readonly status: PaymentStatus;
  readonly tax: number;
  readonly type: PaymentType;
}
