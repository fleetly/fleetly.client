// Fleetly
import { TrafficType } from '@fleetly/core/dist/common';

export interface ITraffic {
  readonly id: string;
  readonly title: string;
  readonly type: TrafficType;
  readonly unit: string;
}
