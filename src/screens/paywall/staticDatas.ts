import {Indicator, Leaf,Scanner} from '@assets/icons';

import {IFeatureCard} from './featureCard';
import {IOfferOption} from './offerOption';

export const featuresData: Array<IFeatureCard> = [
  {
    icon: Scanner,
    promotion: {
      primary: 'Unlimeted',
      secondary: 'Plant Identify',
    },
  },
  {
    icon: Indicator,
    promotion: {
      primary: 'Faster',
      secondary: 'Process',
    },
  },
  {
    icon: Leaf,
    promotion: {
      primary: 'Detailed',
      secondary: 'Plant care',
    },
  },
];

export const offerOptions: Array<IOfferOption> = [
  {
    id: 1,
    primaryLabel: '1 Month',
    secondaryLabel: '$2.99/month, auto renewable',
    promotion: undefined,
    period: 'month',
    price: '$2.99',
  },
  {
    id: 2,
    primaryLabel: '1 Year',
    secondaryLabel: 'First 3 days free, then $529,99/year',
    promotion: 'Save 50%',
    period: 'year',
    price: '$529.99',
  },
];
