export interface IBilling {
  createdAt: Date;
  id: string;
  description?: string;
  status: string;
  amount: number;
  receipt?: string;
}
