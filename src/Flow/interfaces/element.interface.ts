export enum ElementType {
  // Content
  CONTENT_TEXT = 'CONTENT_TEXT',
  // Randomize
  RANDOMIZE_VARIANT = 'RANDOMIZE_VARIANT',
  // Start
  START_DATETIME = 'START_DATETIME',
  START_KEYWORD = 'START_KEYWORD'
}

export interface Element {
  readonly id: string;
  readonly payload: any;
  readonly type: ElementType;
}
