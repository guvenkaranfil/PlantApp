import React from 'react';

import GetStarted from '@screens/getStarted';
import {fireEvent, render, screen} from '@testing-library/react-native';

describe('Get Started Screen', () => {
  it('should renders without any warning or error', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    const mockNavigation = {
      ...actualNav,
      navigate: jest.fn(),
      replace: jest.fn(),
    };

    render(<GetStarted navigation={mockNavigation} />, {});
  });

  it('should call navigation.replace to navigate to the onboarding screen when the "Get Started" button is pressed', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    const mockNavigation = {
      ...actualNav,
      navigate: jest.fn(),
      replace: jest.fn(),
    };

    render(<GetStarted navigation={mockNavigation} />, {});
    const continueButton = screen.getByText(/get started/i);

    fireEvent.press(continueButton);

    expect(mockNavigation.navigate).toHaveBeenCalledTimes(0);
    expect(mockNavigation.replace).toHaveBeenCalledTimes(1);
    expect(mockNavigation.replace).toHaveBeenCalledWith('onboarding');
  });
});
