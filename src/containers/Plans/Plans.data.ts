// Fleetly
import { PlanType } from '@fleetly/core/interfaces';

export const PLANS = [
  {
    description: 'A simple start for everyone',
    title: 'LITE',
    type: PlanType.LITE,
    variants: [
      {
        id: '1',
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
        id: '1',
        price: 30,
        title: 'For 1000 subscribers'
      },
      {
        id: '2',
        price: 70,
        title: 'For 2500 subscribers'
      },
      {
        id: '3',
        price: 125,
        title: 'For 5000 subscribers'
      },
      {
        id: '4',
        price: 200,
        title: 'For 10000 subscribers'
      },
      {
        id: '5',
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
        id: '1',
        price: 200,
        title: '$8 - For each 1000 subscribers'
      }
    ]
  }
];
