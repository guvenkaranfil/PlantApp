import React from 'react';

import Navigation from '../src/navigation';
import {fireEvent, screen} from '@testing-library/react-native';
import {render} from '../.jest/helper/testUtils';

describe('App', () => {
  it('should navigate to onboard screen when user clicks to get started', () => {
    render(<Navigation />);

    const getStartedButton = screen.getByText(/get started/i);
    expect(getStartedButton).toBeOnTheScreen();

    fireEvent.press(getStartedButton);

    expect(screen.getByText(/continue/i)).toBeOnTheScreen();
  });
});
