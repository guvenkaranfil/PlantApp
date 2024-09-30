import React from 'react';

import Navigation from '@navigation/index';
import {render} from '@src/.jest/helper/testUtils';
import * as localStorage from '@src/storage';
import {store} from '@src/store';
import {updateCompleteOnboarding} from '@src/store/slices/user';
import {fireEvent, screen} from '@testing-library/react-native';

describe('App', () => {
  beforeEach(() => {
    localStorage.storage.clearAll();
    store.dispatch(updateCompleteOnboarding(false));

    jest.clearAllMocks();
  });

  it('should follow onboarding flow with starting get started, onboarding, paywall, home screens', () => {
    render(<Navigation />);

    const getStartedButton = screen.getByText(/get started/i);
    expect(getStartedButton).toBeOnTheScreen();

    fireEvent.press(getStartedButton);

    const continueButton = screen.getByText(/continue/i);
    expect(continueButton).toBeOnTheScreen();

    fireEvent.press(continueButton);

    const premiumText = screen.getByText(/premium/i);
    expect(premiumText).toBeOnTheScreen();

    const closeButton = screen.getByTestId('closeButton');
    expect(closeButton).toBeOnTheScreen();

    fireEvent.press(closeButton);

    const homeWelcomeText = screen.getByText(/hi, plant lover/i);
    expect(homeWelcomeText).toBeOnTheScreen();
    expect(localStorage.getStorage('onboardingCompleted')).toBe(true);
  });

  it('should not re-enter onboarding flow if onboarding is completed', async () => {
    const setStorageSpy = jest.spyOn(localStorage, 'setStorage');
    localStorage.setStorage('onboardingCompleted', true);
    store.dispatch(updateCompleteOnboarding(true));
    render(<Navigation />);

    const homeWelcomeText = screen.getByText(/hi, plant lover/i);
    expect(homeWelcomeText).toBeOnTheScreen();
    expect(setStorageSpy).toHaveBeenCalledTimes(2);
  });
});
