import React from 'react';

import Paywall from '@screens/paywall';
import {render} from '@src/.jest/helper/testUtils';
import * as userSlice from '@src/store/slices/user';
import {fireEvent, screen} from '@testing-library/react-native';

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn(() => ({top: 0, bottom: 0})),
}));

const actualNav = jest.requireActual('@react-navigation/native');
const mockNavigation = {
  ...actualNav,
  navigate: jest.fn(),
  replace: jest.fn(),
};

describe('Paywall Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should renders without any warning or error', () => {
    render(<Paywall navigation={mockNavigation} />);
  });

  it('should navigate to home screen when close is presssed', async () => {
    const updateCompleteOnboardingSpy = jest.spyOn(
      userSlice,
      'updateCompleteOnboarding',
    );
    render(<Paywall navigation={mockNavigation} />);
    const closeButton = screen.getByTestId(/closeButton/i);
    expect(closeButton).toBeOnTheScreen();

    fireEvent.press(closeButton);

    expect(updateCompleteOnboardingSpy).toHaveBeenCalledTimes(1);

    fireEvent.press(closeButton);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('tabs');
  });
});
