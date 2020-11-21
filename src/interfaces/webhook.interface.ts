import { WebhookStatus } from '@fleetly/common';

// Interface
import { IStatus } from '@interfaces/status.interface';

export interface IWebhook {
  id: string;
  status: IStatus<WebhookStatus>;
}
