import { WebhookStatus } from '@fleetly/common';

export interface IWebhook {
  id: string;
  status: WebhookStatus;
}
