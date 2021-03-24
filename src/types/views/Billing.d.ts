declare namespace Billing {
  interface IBilling {
    createdAt: Date;
    id: string;
    description?: string;
    status: string;
    amount: number;
    receipt?: string;
  }

  interface TableProps {
    data: IBilling[];
  }
}

export = Billing;
export as namespace Billing;
