// Fleetly
import { PlanType } from '@fleetly/core/interfaces';

export const PLANS = [
  {
    description: 'A simple start for everyone',
    title: 'LITE',
    type: PlanType.LITE,
    variants: [
      {
        price: 0,
        title: 'For 100 subscribers'
      }
    ]
  },
  {
    description: 'For small and medium business',
    title: 'PRO',
    type: PlanType.PRO,
    variants: [
      {
        price: 30,
        title: 'For 1000 subscribers'
      },
      {
        price: 70,
        title: 'For 2500 subscribers'
      },
      {
        price: 125,
        title: 'For 5000 subscribers'
      },
      {
        price: 200,
        title: 'For 10000 subscribers'
      },
      {
        price: 300,
        title: 'For 20000 subscribers'
      }
    ]
  },
  {
    description: 'A simple start for everyone',
    type: PlanType.ENTERPRCIE,
    title: 'ENTERPRICE',
    variants: [
      {
        price: 200,
        title: '$8 - For each 1000 subscribers'
      }
    ]
  }
];
