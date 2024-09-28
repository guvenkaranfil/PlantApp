import React from 'react';
import {render} from '../../.jest/helper/testUtils';

import Home from '../../src/screens/home';

describe('Home Screen', () => {
  it('should render home screen without any error or warning', () => {
    render(<Home />);
  });
});
