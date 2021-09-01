// Fleetly
import { CollaboratorRole } from '@fleetly/core/interfaces';

export const ROLES: {
  color: Color;
  info: string;
  isDisabled?: boolean;
  label: string;
  value: CollaboratorRole;
}[] = [
  {
    color: 'orange',
    info: 'Can disable and delete the company!',
    isDisabled: true,
    label: 'Owner',
    value: CollaboratorRole.OWNER
  },
  {
    color: 'purple',
    info:
      'Can edit company resources: channels, fields, tags. Can edit and block subscribers.',
    label: 'Admin',
    value: CollaboratorRole.ADMIN
  },
  {
    color: 'blue',
    info: 'Can read company resources. Can send messages in Fleetly.Chat.',
    label: 'Member',
    value: CollaboratorRole.MEMBER
  }
];
