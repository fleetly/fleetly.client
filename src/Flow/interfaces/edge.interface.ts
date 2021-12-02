export interface Edge {
  readonly id: string;
  readonly sourceId: string;
  readonly sourceElementId?: string;
  readonly sourceHandleId?: string;
  readonly targetId: string;
}
