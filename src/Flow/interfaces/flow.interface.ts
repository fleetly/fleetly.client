// Interfaces
import { Block } from './block.interface';
import { Edge } from './edge.interface';

export interface Flow {
  readonly id: string;
  readonly blocks: Block[];
  readonly edges: Edge[];
  readonly title: string;
}
