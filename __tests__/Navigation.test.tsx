import React from 'react';

import Navigation from '@navigation/index';
import {render} from '@src/.jest/helper/testUtils';
import {fireEvent, screen} from '@testing-library/react-native';

describe('App', () => {
  it('should follow onboarding flow with starting get started, onboarding and paywall screens', () => {
    render(<Navigation />);

    const getStartedButton = screen.getByText(/get started/i);
    expect(getStartedButton).toBeOnTheScreen();

    fireEvent.press(getStartedButton);

    const continueButton = screen.getByText(/continue/i);
    expect(continueButton).toBeOnTheScreen();

    fireEvent.press(continueButton);

    const premiumText = screen.getByText(/premium/i);
    expect(premiumText).toBeOnTheScreen();
  });
});
