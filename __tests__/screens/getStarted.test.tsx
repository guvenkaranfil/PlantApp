import React from 'react';
import {render} from '@testing-library/react-native';

import GetStarted from '../../src/screens/getStarted';

describe('Get Started Screen', () => {
  it('should renders without any warning or error', () => {
    render(<GetStarted />, {});
  });
});
