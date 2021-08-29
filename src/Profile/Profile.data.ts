// Routes
import ROUTES from '@routes';

export const PROFILE_MENU = [
  {
    children: [
      {
        exact: true,
        icon: 'fas fa-user-circle',
        title: 'Profile',
        to: ROUTES.PROFILE.GENERAL
      },
      {
        icon: 'far fa-users',
        title: 'Collaboration',
        to: ROUTES.PROFILE.COLLABORATION
      },
      {
        icon: 'far fa-shield-alt',
        title: 'Security',
        to: ROUTES.PROFILE.SECURITY
      }
    ]
  }
];
