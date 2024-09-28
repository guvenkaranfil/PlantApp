import React from 'react';
import {render, screen} from '@testing-library/react-native';

import Onboarding from '../../src/screens/onboarding';
import {onboardingDatas} from '../../src/screens/onboarding/datas';

describe('Onboarding Screen', () => {
  it('should renders without any warning or error', () => {
    render(<Onboarding />);
  });

  it('should renders elements accordingly design', async () => {
    render(<Onboarding />);
    const contentImages = screen.getAllByTestId('contentImage');

    expect(screen.getByTestId('list')).toBeOnTheScreen();
    expect(contentImages.length).toBe(2);

    onboardingDatas.map((item, index) => {
      expect(screen.getByText(item.titleLeftPrimary)).toBeOnTheScreen();
      expect(screen.getByText(item.titleLeftSecondary)).toBeOnTheScreen();
      expect(screen.getByText(item.titleRight)).toBeOnTheScreen();
      expect(contentImages[index].props.source).toBe(item.contentSource);
    });

    const activeDothSize = 10;
    const dotViews = screen.getAllByTestId('dot');
    expect(dotViews.length).toBe(2);
    expect(dotViews[0].props.style.width).toBe(activeDothSize);

    const continueButton = screen.getByText(/continue/i);
    expect(continueButton).toBeOnTheScreen();
  });
});
