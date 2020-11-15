export default {
  COMPANY: {
    BILLING: {
      path: '/:companyId/billing'
    },
    CHANNELS: {
      path: '/:companyId/channels'
    },
    COLLABORATORS: {
      path: '/:companyId/collaborators'
    },
    DASHBOARD: {
      path: '/:companyId/dashboard'
    },
    FIELDS: {
      path: '/:companyId/fields'
    },
    GENERAL: {
      path: '/:companyId/general'
    },
    NOTIFICATIONS: {
      path: '/:companyId/notifications'
    },
    SUBSCRIBERS: {
      path: '/:companyId/subscribers'
    },
    TAGS: {
      path: '/:companyId/tags'
    },
    path: '/:companyId',
    to: (id: string) => `/${id}`
  },
  PROFILE: {
    GENERAL: {
      path: '/profile'
    },
    COLLABORATION: {
      path: '/profile/collaboration'
    },
    SECURITY: {
      path: '/profile/security'
    },
    path: '/profile'
  },
  CHAT: {
    path: '/chat/:companyId'
  },
  FLOW: {
    path: '/flow/:companyId'
  }
};
