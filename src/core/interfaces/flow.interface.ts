// Fleetly
import { BlockType, ElementType, IBlockPosition } from '@fleetly/flow';

export interface IBlock {
  readonly id: string;
  readonly elements: IElement[];
  readonly title: string;
  readonly position: IBlockPosition;
  readonly type: BlockType;
}

export interface IEdge {
  readonly id: string;
  readonly sourceId: string;
  readonly sourceElementId?: string;
  readonly sourceHandleId?: string;
  readonly targetId: string;
}

export interface IElement {
  readonly id: string;
  readonly payload: any;
  readonly type: ElementType;
}

export interface IFlow {
  readonly id: string;
  readonly blocks: IBlock[];
  readonly edges: IEdge[];
  readonly title: string;
}
