const TEST = [
  {
    author: 'Test Test',
    children: [
      {
        date: new Date(),
        id: 1,
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 2,
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 3,
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 4,
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 5,
        text: '123412341234'
      }
    ],
    variant: 'incoming'
  },
  {
    author: 'Test Read',
    children: [
      {
        date: new Date(),
        id: 6,
        status: 'read',
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 7,
        status: 'read',
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 8,
        status: 'delivered',
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 9,
        status: 'sent',
        text: '123412341234'
      },
      {
        date: new Date(),
        id: 10,
        status: 'sent',
        text: '123412341234'
      }
    ],

    variant: 'outcoming'
  }
];

export default TEST;
