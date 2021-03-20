import { Color } from '@fleetly/common/dist/enums';

declare namespace Flow {
  interface Badge {
    color?: Color;
    description?: string;
    icon?: string;
    title: string;
  }
}

export = Flow;
export as namespace Flow;
