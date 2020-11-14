import { Color, MessagePolicy } from '@fleetly/common/dist/enums';

export const MESSAGE_POLICY_STATUS: any = {
  [MessagePolicy.ALLOWED]: {
    color: Color.GREEN,
    title: 'Allowed'
  },
  [MessagePolicy.DENIED]: {
    color: Color.RED,
    title: 'Denied'
  },
  [MessagePolicy.NOT_ALLOWED]: {
    color: Color.GRAY,
    title: 'Not Allowed'
  }
};
