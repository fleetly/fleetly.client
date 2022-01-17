// Interfaces
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
  readonly draft: {
    readonly blocks: Block[];
    readonly edges: Edge[];
  };
  readonly public: {
    readonly blocks: Block[];
    readonly edges: Edge[];
  };
  readonly status: FlowStatus;
  readonly title: string;
}
