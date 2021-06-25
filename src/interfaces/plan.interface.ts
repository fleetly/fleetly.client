// Fleetly
import { PlanType } from '@fleetly/core/dist/common';

// Interfaces
import { ITraffic } from './traffic.interface';

export interface IPlan {
  readonly id: string;
  readonly price: number;
  readonly title: string;
  readonly traffics: IPlanTraffic[];
  readonly type: PlanType;
}

export interface IPlanTraffic {
  readonly id: string;
  readonly chunkPrice: number;
  readonly chunkSize: number;
  readonly limit: number;
  readonly origin: ITraffic;
}
