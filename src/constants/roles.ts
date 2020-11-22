import { Color } from '@fleetly/common/dist/enums';

export const ROLES = [
  {
    color: Color.ORANGE,
    info: 'Can disable and delete the company!',
    label: 'Owner',
    value: 'OWNER'
  },
  {
    color: Color.PURPLE,
    info:
      'Can edit company resources: channels, fields, tags. Can edit and block subscribers.',
    label: 'Admin',
    value: 'ADMIN'
  },
  {
    color: Color.BLUE,
    info: 'Can read company resources. Can send messages in Fleetly.Chat.',
    label: 'Member',
    value: 'MEMBER'
  }
];
