import ROUTES from '@routes';

export const MENU = [
  {
    children: [
      {
        icon: 'far fa-tachometer-alt',
        title: 'Dashboard',
        to: ROUTES.COMPANY.DASHBOARD.path
      }
    ]
  },
  {
    children: [
      {
        icon: 'far fa-comment',
        title: 'Chat',
        to: ROUTES.CHAT.path
      },
      {
        icon: 'far fa-code-merge',
        title: 'Flow',
        to: ROUTES.FLOW.path
      }
    ],
    title: 'Apps'
  },
  {
    children: [
      {
        icon: 'far fa-database',
        title: 'Channels',
        to: ROUTES.COMPANY.CHANNELS.path
      },
      {
        icon: 'far fa-users',
        title: 'Subscribers',
        to: ROUTES.COMPANY.SUBSCRIBERS.path
      }
    ],
    title: 'General'
  },
  {
    children: [
      {
        icon: 'far fa-home-alt',
        title: 'Profile',
        to: ROUTES.COMPANY.PROFILE.path
      },
      {
        icon: 'far fa-wallet',
        title: 'Billing',
        to: ROUTES.COMPANY.BILLING.path
      },
      {
        icon: 'far fa-user-friends',
        title: 'Collaborators',
        to: ROUTES.COMPANY.COLLABORATORS.path
      },
      {
        icon: 'far fa-table',
        title: 'Fields',
        to: ROUTES.COMPANY.FIELDS.path
      },
      {
        icon: 'far fa-bells',
        title: 'Notifications',
        to: ROUTES.COMPANY.NOTIFICATIONS.path
      },
      {
        icon: 'far fa-tags',
        title: 'Tags',
        to: ROUTES.COMPANY.TAGS.path
      }
    ],
    title: 'Settings'
  }
];
