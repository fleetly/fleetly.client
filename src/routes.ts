export default {
  ROOT: '/',
  COMPANY: {
    ROOT: '/:companyId',
    BILLING: '/:companyId/billing',
    CHANNEL: '/:companyId/channels/:channelId',
    CHANNELS: '/:companyId/channels',
    CHAT: {
      ROOT: '/:companyId/chat',
      DIALOG: '/:companyId/chat/:chatId'
    },
    COLLABORATORS: '/:companyId/collaborators',
    DASHBOARD: '/:companyId/dashboard',
    FIELDS: '/:companyId/fields',
    FLOWS: {
      ROOT: '/:companyId/flows',
      FLOW: '/:companyId/flows/:flowId'
    },
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
