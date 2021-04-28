// Fleetly
import { IBlockPosition, BlockType, ElementType } from '@fleetly/flow';

export interface IBlock {
  readonly id: string;
  readonly elements: IElement[];
  readonly title: string;
  readonly position: IBlockPosition;
  readonly type: BlockType;
}

export interface IElement {
  readonly id: string;
  readonly type: ElementType;
}

export interface IFlow {
  readonly id: string;
  readonly blocks: IBlock[];
  readonly title: string;
}
