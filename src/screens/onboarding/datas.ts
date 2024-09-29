import {ImageResources} from '@assets/Generated/ImageResources.g';

export interface IOnboardingData {
  index: number;
  titleLeftPrimary: string;
  titleLeftSecondary: string;
  titleRight: string;
  brushSize: number;
  contentSource: ImageResources;
  brushRightOffset: number;
}

export const onboardingDatas: Array<IOnboardingData> = [
  {
    index: 0,
    titleLeftPrimary: 'Take a photo to ',
    titleLeftSecondary: 'the plant!',
    titleRight: 'identify',
    brushSize: 136,
    contentSource: ImageResources.onboardingfirstbackground,
    brushRightOffset: -6,
  },
  {
    index: 1,
    titleLeftPrimary: 'Get plant ',
    titleLeftSecondary: '',
    titleRight: 'care guides',
    brushSize: 152,
    contentSource: ImageResources.onboardingsecondcontent,
    brushRightOffset: 6,
  },
];
