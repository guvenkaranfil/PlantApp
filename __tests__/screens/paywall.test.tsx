import React from 'react';
import {render} from '@testing-library/react-native';

import Paywall from '../../src/screens/paywall';
import {SafeAreaProvider} from 'react-native-safe-area-context';

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
    render(
      <SafeAreaProvider>
        <Paywall navigation={mockNavigation} />
      </SafeAreaProvider>,
    );
  });
});
