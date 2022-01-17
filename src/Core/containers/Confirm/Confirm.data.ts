// Types
import { ConfirmData } from './Confirm.types';

export const CONFIRM_PRESET = {
  DELETE: ({
    title,
    __typename
  }: {
    title?: string;
    __typename?: string;
  }): ConfirmData => ({
    buttons: [
      { role: 'reject', title: 'Cancel', variant: 'outlined' },
      { color: 'red', role: 'resolve', title: 'Delete now' }
    ],
    description: `You are going to delete «${title}»`,
    icon: { color: 'red', name: 'fad fa-trash-alt' },
    title: `Delete ${__typename}?`
  })
};
