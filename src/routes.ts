export default {
  COMPANY: {
    ROOT: '/:companyId',
    BILLING: '/:companyId/billing',
    CHANNEL: '/:companyId/channels/:channelId',
    CHANNELS: '/:companyId/channels',
    CHAT: {
      ROOT: '/:companyId/chat',
      DIALOG: '/:companyId/chat/:subscriberId'
    },
    COLLABORATORS: '/:companyId/collaborators',
    DASHBOARD: '/:companyId/dashboard',
    FIELDS: '/:companyId/fields',
    FLOW: '/:companyId/flow',
    GENERAL: '/:companyId/general',
    STATS: '/:companyId/channels/stats',
    NOTIFICATIONS: '/:companyId/notifications',
    SUBSCRIBERS: '/:companyId/subscribers',
    TAGS: '/:companyId/tags'
  },
  PROFILE: {
    GENERAL: '/profile',
    COLLABORATION: '/profile/collaboration',
    SECURITY: '/profile/security'
  },
  SIGN: {
    ROOT: '/sign',
    IN: '/sign/in',
    UP: '/sign/up'
  }
};
