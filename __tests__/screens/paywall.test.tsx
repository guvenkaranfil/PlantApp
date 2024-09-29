import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from '@navigation';
import {fireEvent, screen} from '@testing-library/react-native';

import {render} from '../../.jest/helper/testUtils';

const Paywall = () => <Navigation initialRouteName="paywall" />;

describe('Paywall Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should renders without any warning or error', () => {
    render(<Paywall />, {
      wrapper: SafeAreaProvider,
    });
  });

  it('should navigate to home screen when close is presssed', async () => {
    render(<Paywall />);
    const closeButton = screen.getByTestId(/closeButton/i);
    expect(closeButton).toBeOnTheScreen();

    fireEvent.press(closeButton);

    const welcomeMessage = screen.getByText(/hi, plant lover!/i);
    expect(welcomeMessage).toBeOnTheScreen();
  });
});
