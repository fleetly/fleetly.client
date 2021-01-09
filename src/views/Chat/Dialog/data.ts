const TEST = [
  {
    author: {
      firstname: 'Ivan',
      lastname: 'Vyatkin',
      photo:
        'https://ic.pics.livejournal.com/annataliya/9442011/18981/18981_800.jpg',
      username: 'ivan095'
    },
    chatId: '1',
    date: new Date(),
    messages: [
      {
        id: '1',
        status: 'read',
        text: 'Test read message'
      },
      {
        id: '2',
        status: 'delivered',
        text:
          'Test incoming message, Test incoming message Test incoming message, Test incoming message Test incoming message, Test incoming message Test incoming message, Test incoming message Test incoming message, Test incoming message Test incoming message, Test incoming message Test incoming message, Test incoming message Test incoming message, Test incoming message Test incoming message, Test incoming message '
      },
      {
        id: '3',
        status: 'sent',
        text: 'Test sent message'
      }
    ]
  },
  {
    author: {
      firstname: 'Ivan',
      lastname: 'Vyatkin',
      photo:
        'https://ic.pics.livejournal.com/annataliya/9442011/18981/18981_800.jpg',
      username: 'ivan095'
    },
    chatId: '1',
    date: new Date(),
    messages: [
      {
        id: '1',
        status: 'read',
        text: 'Test read message'
      },
      {
        id: '2',
        status: 'delivered',
        text: 'Test delivered message'
      },
      {
        id: '3',
        status: 'sent',
        text: 'Test sent message'
      }
    ]
  },
  {
    author: {
      firstname: 'Ivan',
      lastname: 'Vyatkin',
      photo:
        'https://ic.pics.livejournal.com/annataliya/9442011/18981/18981_800.jpg',
      username: 'ivan095'
    },
    chatId: '1',
    date: new Date(),
    isIncoming: true,
    messages: [
      {
        id: '1',
        text:
          'Test incoming message, Test incoming message Test incoming message, Test incoming message Test incoming message, Test incoming message Test incoming message, Test incoming message Test incoming message, Test incoming message Test incoming message, Test incoming message Test incoming message, Test incoming message Test incoming message, Test incoming message Test incoming message, Test incoming message '
      },
      {
        id: '2',
        text: 'Test incoming message'
      },
      {
        id: '3',
        text: 'Test incoming message'
      }
    ]
  },
  {
    id: '10',
    author: {
      firstname: 'Демис',
      lastname: 'Карибидис',
      photo: 'https://i.ytimg.com/vi/bwSUhBrKAe8/maxresdefault.jpg',
      username: 'demis'
    },
    chatId: '11',
    date: new Date(),
    isComment: true,
    text: 'Ты на него посмотри!!!! Ля ты крыса!!!'
  }
];

export default TEST;
