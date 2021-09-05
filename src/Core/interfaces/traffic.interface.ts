export interface ITraffic {
  readonly id: string;
  readonly chunkPrice: number;
  readonly chunkSize: number;
  readonly limit?: number;
  readonly title: string;
  readonly total: number;
  readonly unit: string;
  readonly value: number;
}
