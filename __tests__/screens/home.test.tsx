import React from 'react';

import * as api from '@api/index';
import Home from '@screens/home';
import {fireEvent, render, screen, waitFor} from '@src/.jest/helper/testUtils';
import {categories, questions} from '@src/__datas__';
import {store} from '@store/index';
import {updateUserPremium} from '@store/slices/user';

const SUT = (getTime?: Date, navigation?: any) => (
  <Home getTime={getTime} navigation={navigation ?? jest.fn()} />
);

describe('Home Screen', () => {
  it('should render home screen without any error or warning', () => {
    render(SUT());
  });

  it('should display "Good Morning", "Good Afternoon", "Good Evening" welcome message', () => {
    const afterNoonDate = new Date();
    afterNoonDate.setHours(15); // 3 PM
    afterNoonDate.setMinutes(30); // 30 minutes
    const {rerender} = render(SUT(afterNoonDate));

    expect(screen.getByText(/good afternoon/i)).toBeOnTheScreen();

    const morningDate = new Date();
    morningDate.setHours(8); // 8 AM
    morningDate.setMinutes(0); // 30 minutes
    rerender(SUT(morningDate));

    expect(screen.getByText(/good morning/i)).toBeOnTheScreen();

    const eveningDate = new Date();
    eveningDate.setHours(20); // 8 PM
    eveningDate.setMinutes(45); // 30 minutes
    rerender(SUT(eveningDate));

    expect(screen.getByText(/good evening/i)).toBeOnTheScreen();
  });

  it('should render "Search for plants" search field', () => {
    render(SUT());
    const searchField = screen.getByPlaceholderText(/search for plants/i);
    expect(searchField).toBeOnTheScreen();

    fireEvent.changeText(searchField, 'Monstera');

    expect(searchField).toHaveProp('value', 'Monstera');
  });

  it('should show premium banner if user is not subscribed', () => {
    store.dispatch(updateUserPremium(false));
    render(SUT());

    expect(screen.getByTestId(/premiumBox/i)).toBeOnTheScreen();
  });

  it('should not show premium banner if user is not subscribed', () => {
    store.dispatch(updateUserPremium(true));
    render(SUT());

    expect(screen.queryByTestId(/premiumBox/i)).not.toBeOnTheScreen();
  });

  it('should navigate to paywall screen when user taps on "Tap to upgrade your account!"', () => {
    store.dispatch(updateUserPremium(false));
    const navigateSpy = jest.fn();
    const navigation = {
      navigate: navigateSpy,
    };
    render(<Home navigation={navigation} />);

    fireEvent.press(screen.getByTestId(/premiumBox/i));

    expect(navigateSpy).toHaveBeenCalledWith('paywall');
  });

  it('should fetch "Get Started" questions from API and display them', async () => {
    const fetchGetStartedQuestionsSpy = jest
      .spyOn(api, 'fetchGetStartedQuestions')
      .mockResolvedValue(questions);
    render(SUT());

    await waitFor(() => {
      expect(screen.getByText(/get started/i)).toBeOnTheScreen();
      questions.map(question => {
        expect(screen.getByText(question.title)).toBeOnTheScreen();
      });
    });
    expect(fetchGetStartedQuestionsSpy).toHaveBeenCalledTimes(1);
  });

  it('should fetch categories from API and display them', async () => {
    const fetchCategoriesSpy = jest
      .spyOn(api, 'fetchCategories')
      .mockResolvedValue(categories);
    render(SUT());

    await waitFor(() => {
      categories.data.map(category => {
        expect(screen.getByText(category.title)).toBeOnTheScreen();
      });
    });
    expect(fetchCategoriesSpy).toHaveBeenCalledTimes(1);
  });
});
