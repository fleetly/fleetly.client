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
    NOTIFICATIONS: {
      path: '/:companyId/notifications'
    },
    GENERAL: {
      path: '/:companyId/general'
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
  CHAT: {
    path: '/chat/:companyId'
  },
  FLOW: {
    path: '/flow/:companyId'
  }
};
