// Routes
import { PROFILE_ROUTES } from './Profile.routes';

export const PROFILE_MENU = [
  {
    children: [
      {
        exact: true,
        icon: 'fas fa-user-circle',
        title: 'Profile',
        to: PROFILE_ROUTES.ROOT
      },
      {
        icon: 'far fa-users',
        title: 'Collaboration',
        to: PROFILE_ROUTES.COLLABORATION
      },
      {
        icon: 'far fa-shield-alt',
        title: 'Security',
        to: PROFILE_ROUTES.SECURITY
      }
    ]
  }
];
