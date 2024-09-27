import React from 'react';
import {render} from '@testing-library/react-native';

import GetStarted from '../../src/screens/getStarted';
import {SafeAreaProvider} from 'react-native-safe-area-context';

describe('Get Started Screen', () => {
  it('should renders without any warning or error', () => {
    render(<GetStarted />, {
      wrapper: children => <SafeAreaProvider>{children}</SafeAreaProvider>,
    });
  });
});
