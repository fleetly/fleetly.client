export const CURRENT_PLAN = {
  endDate: new Date(),
  limits: {
    amount: 30,
    limit: 100,
    title: 'Subscribers',
    unit: 'subscriber',
    unitChunk: 1000,
    unitPrice: 30,
    value: 29
  },
  plan: {
    id: 1,
    description: 'Advanced collaboration and support for organization',
    features: [
      {
        title: '3.000 Actions minutes/month'
      },
      {
        title: '3.000 Actions minutes/month'
      },
      {
        title: '3.000 Actions minutes/month'
      },
      {
        title: '3.000 Actions minutes/month'
      },
      {
        title: '3.000 Actions minutes/month'
      },
      {
        title: '3.000 Actions minutes/month'
      }
    ],
    title: 'PRO',
    type: 'PRO'
  },
  startDate: new Date()
};

export const PAYMENT_HISTORY = [
  {
    createdAt: new Date(),
    id: '1',
    description: 'test',
    status: 'SUCCESSED',
    amount: 200,
    accessor: 'test'
  },
  {
    createdAt: new Date(),
    id: '2',
    description: 'test 2',
    status: 'PENDING',
    amount: 1999,
    accessor: 'test 2'
  },
  {
    createdAt: new Date(),
    id: '2',
    description: 'test 2',
    status: 'FAILED',
    amount: 15,
    accessor: 'test 2'
  }
];
