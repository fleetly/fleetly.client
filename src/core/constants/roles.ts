import { Color } from '@fleetly/common/dist/enums';

// Fleetly
import { CollaboratorRole } from '@fleetly/core/interfaces';

export const ROLES = [
  {
    color: Color.ORANGE,
    info: 'Can disable and delete the company!',
    isDisabled: true,
    label: 'Owner',
    value: CollaboratorRole.OWNER
  },
  {
    color: Color.PURPLE,
    info:
      'Can edit company resources: channels, fields, tags. Can edit and block subscribers.',
    label: 'Admin',
    value: CollaboratorRole.ADMIN
  },
  {
    color: Color.BLUE,
    info: 'Can read company resources. Can send messages in Fleetly.Chat.',
    label: 'Member',
    value: CollaboratorRole.MEMBER
  }
];
