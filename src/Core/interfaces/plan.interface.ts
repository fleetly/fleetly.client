// Fleetly
import { PlanType } from '@fleetly/core/interfaces';

export interface IPlan {
  readonly id: string;
  readonly features?: string[];
  readonly price: number;
  readonly title: string;
  readonly type: PlanType;
}
