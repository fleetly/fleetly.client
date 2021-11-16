// Interfaces
import { Element } from './element.interface';

export enum BlockType {
  ACTION = 'ACTION',
  CONDITION = 'CONDITION',
  CONTENT = 'CONTENT',
  RANDOMIZE = 'RANDOMIZE',
  START = 'START'
}

export interface Block {
  readonly id: string;
  readonly elements: Element[];
  readonly position: { x: number; y: number };
  readonly title: string;
  readonly type: BlockType;
}
