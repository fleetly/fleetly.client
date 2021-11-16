export enum ElementType {
  CONTENT_TEXT = 'CONTENT_TEXT',
  START_DATETIME = 'START_DATETIME',
  START_KEYWORD = 'START_KEYWORD'
}

export interface Element {
  readonly id: string;
  readonly payload: any;
  readonly type: ElementType;
}
