import React from 'react';
import {fireEvent, render, screen, waitFor} from '../../.jest/helper/testUtils';

import Home from '../../src/screens/home';
import {store} from '../../src/store';
import {updateUserPremium} from '../../src/store/slices/user';
import * as api from '../../src/api';

describe('Home Screen', () => {
  it('should render home screen without any error or warning', () => {
    render(<Home />);
  });

  it('should display "Good Morning", "Good Afternoon", "Good Evening" welcome message', () => {
    const afterNoonDate = new Date();
    afterNoonDate.setHours(15); // 3 PM
    afterNoonDate.setMinutes(30); // 30 minutes
    const {rerender} = render(<Home getTime={afterNoonDate} />);

    expect(screen.getByText(/good afternoon/i)).toBeOnTheScreen();

    const morningDate = new Date();
    morningDate.setHours(8); // 8 AM
    morningDate.setMinutes(0); // 30 minutes
    rerender(<Home getTime={morningDate} />);

    expect(screen.getByText(/good morning/i)).toBeOnTheScreen();

    const eveningDate = new Date();
    eveningDate.setHours(20); // 8 PM
    eveningDate.setMinutes(45); // 30 minutes
    rerender(<Home getTime={eveningDate} />);

    expect(screen.getByText(/good evening/i)).toBeOnTheScreen();
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

    expect(screen.getByText(/free premium available/i)).toBeOnTheScreen();
    expect(screen.getByText(/tap to upgrade your account/i)).toBeOnTheScreen();
  });

  it('should not show premium banner if user is not subscribed', () => {
    store.dispatch(updateUserPremium(true));
    render(<Home />);

    expect(screen.queryByText(/free premium available/i)).not.toBeOnTheScreen();
    expect(
      screen.queryByText(/tap to upgrade your account/i),
    ).not.toBeOnTheScreen();
  });

  it('should fetch "Get Started" questions from API and display them', async () => {
    const questions = [
      {
        id: 1,
        title: 'How to identify plants?',
        subtitle: 'Life Style',
        image_uri:
          'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2FCard.png?alt=media',
        uri: 'https://plantapp.app/blog/identifying-plant-in-10-steps/',
        order: 1,
      },
      {
        id: 2,
        title: 'Differences Between Species and Varieties?',
        subtitle: 'Plant Identify',
        image_uri:
          'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2Fcard2.png?alt=media',
        uri: 'https://plantapp.app/blog/differences-between-species-and-varieties/',
        order: 2,
      },
      {
        id: 3,
        title: 'The reasons why the same plant can look different?',
        subtitle: 'Life Style',
        image_uri:
          'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2FCard3.png?alt=media',
        uri: 'https://plantapp.app/blog/same-seeds-but-different-looking-plants/',
        order: 3,
      },
    ];
    const fetchGetStartedQuestionsSpy = jest
      .spyOn(api, 'fetchGetStartedQuestions')
      .mockResolvedValue(questions);
    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText(/get started/i)).toBeOnTheScreen();
      questions.map(question => {
        expect(screen.getByText(question.title)).toBeOnTheScreen();
      });
    });
    expect(fetchGetStartedQuestionsSpy).toHaveBeenCalledTimes(1);
  });
});
