export interface IInvoice {
  id: string;
  amount: number;
  createdAt: Date;
  description?: string;
  receipt?: string;
  status: string;
}
