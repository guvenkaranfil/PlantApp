import React from 'react';
import {fireEvent, render, screen} from '../../.jest/helper/testUtils';

import Home from '../../src/screens/home';
import {store} from '../../src/store';
import {updateUserPremium} from '../../src/store/slices/user';

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

  it('should render "Search for plants" search field', () => {
    render(<Home />);
    const searchField = screen.getByPlaceholderText(/search for plants/i);
    expect(searchField).toBeOnTheScreen();

    fireEvent.changeText(searchField, 'Monstera');

    expect(searchField).toHaveProp('value', 'Monstera');
  });

  it('should show premium banner if user is not subscribed', () => {
    store.dispatch(updateUserPremium(false));
    render(<Home />);

    expect(screen.getByText(/free premium available/i)).toBeTruthy();
    expect(screen.getByText(/tap to upgrade your account/i)).toBeTruthy();
  });

  it('should not show premium banner if user is not subscribed', () => {
    store.dispatch(updateUserPremium(true));
    render(<Home />);

    expect(screen.queryByText(/free premium available/i)).not.toBeTruthy();
    expect(screen.queryByText(/tap to upgrade your account/i)).not.toBeTruthy();
  });
});
