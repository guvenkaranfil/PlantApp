import React from 'react';
import {render, screen} from '../../.jest/helper/testUtils';

import Home from '../../src/screens/home';

describe('Home Screen', () => {
  it('should render home screen without any error or warning', () => {
    render(<Home />);
  });

  it('should display "Good Morning", "Good Afternoon", "Good Evening" welcome message', () => {
    const afterNoonDate = new Date();
    afterNoonDate.setHours(15); // 3 PM
    afterNoonDate.setMinutes(30); // 30 minutes
    const {rerender} = render(<Home getTime={afterNoonDate} />);

    expect(screen.getByText(/good afternoon/i)).toBeTruthy();

    const morningDate = new Date();
    morningDate.setHours(8); // 8 AM
    morningDate.setMinutes(0); // 30 minutes
    rerender(<Home getTime={morningDate} />);

    expect(screen.getByText(/good morning/i)).toBeTruthy();

    const eveningDate = new Date();
    eveningDate.setHours(20); // 8 PM
    eveningDate.setMinutes(45); // 30 minutes
    rerender(<Home getTime={eveningDate} />);

    expect(screen.getByText(/good evening/i)).toBeTruthy();
  });
});
