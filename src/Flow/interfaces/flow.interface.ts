// Interfaces
import { IChannel } from '@interfaces/channel.interface';

import { Block } from './block.interface';
import { Edge } from './edge.interface';

export enum FlowMode {
  DRAFT = 'DRAFT',
  PUBLIC = 'PUBLIC'
}

export enum FlowStatus {
  DISABLED = 'DISABLED',
  PUBLISHED = 'PUBLISHED',
  UNPUBLISHED = 'UNPUBLISHED'
}

export interface Flow {
  readonly id: string;
  readonly blocks: Block[];
  readonly channels: IChannel[];
  readonly edges: Edge[];
  readonly status: FlowStatus;
  readonly title: string;
}
