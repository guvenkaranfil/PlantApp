import React from 'react';

import Onboarding from '@screens/onboarding';
import {onboardingDatas} from '@screens/onboarding/datas';
import {fireEvent, render, screen} from '@testing-library/react-native';

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn(() => ({top: 0, bottom: 0})),
}));

const actualNav = jest.requireActual('@react-navigation/native');
const mockNavigation = {
  ...actualNav,
  navigate: jest.fn(),
  replace: jest.fn(),
};
describe('Onboarding Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should renders without any warning or error', () => {
    render(<Onboarding navigation={mockNavigation} />);
  });

  it('should renders elements accordingly design', async () => {
    render(<Onboarding navigation={mockNavigation} />);
    const contentImages = screen.getAllByTestId('contentImage');

    expect(screen.getByTestId('list')).toBeOnTheScreen();
    expect(contentImages.length).toBe(2);

    onboardingDatas.map((item, index) => {
      expect(screen.getByText(item.titleLeftPrimary)).toBeOnTheScreen();
      if (item.titleLeftSecondary) {
        expect(screen.getByText(item.titleLeftSecondary)).toBeOnTheScreen();
      }
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

  it('should navigate to paywall screen when onboarding carousel sliding fails', async () => {
    render(<Onboarding navigation={mockNavigation} />);
    const continueButton = screen.getByText(/continue/i);
    expect(continueButton).toBeOnTheScreen();

    fireEvent.press(continueButton);

    expect(mockNavigation.replace).toHaveBeenCalledTimes(1);
    expect(mockNavigation.replace).toHaveBeenCalledWith('paywall');
  });
});
