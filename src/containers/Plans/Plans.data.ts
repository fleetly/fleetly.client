// Fleetly
import { PlanType } from '@fleetly/core/interfaces';

// Assets
import enterpriceImage from './Common/assets/enterprice@1x.png';
import enterpriceImage2x from './Common/assets/enterprice@2x.png';
import liteImage from './Common/assets/lite@1x.png';
import liteImage2x from './Common/assets/lite@2x.png';
import proImage from './Common/assets/pro@1x.png';
import proImage2x from './Common/assets/pro@2x.png';

export const PLANS = {
  [PlanType.LITE]: {
    description: 'A simple start for everyone',
    plans: []
  },
  [PlanType.PRO]: {
    description: 'For small and medium business',
    plans: []
  },
  [PlanType.ENTERPRICE]: {
    description: 'A simple start for everyone',
    plans: []
  }
};

export const PLANS_IMAGE_SET = {
  [PlanType.ENTERPRICE]: {
    '1x': enterpriceImage,
    '2x': enterpriceImage2x
  },
  [PlanType.LITE]: {
    '1x': liteImage,
    '2x': liteImage2x
  },
  [PlanType.PRO]: {
    '1x': proImage,
    '2x': proImage2x
  }
};
