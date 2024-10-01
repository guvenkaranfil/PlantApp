import React from 'react';

import {render, screen} from '@src/.jest/helper/testUtils';
import Home from '@src/screens/home';
import i18n, {resources} from '@src/translation';

const actualNav = jest.requireActual('@react-navigation/native');

describe('Language Test', () => {
  it('should home screen use texts from "en" translation', () => {
    i18n.changeLanguage('en');
    render(<Home navigation={actualNav} />);

    const translations =
      resources['en' as keyof typeof resources].translation.home;
    Object.values(translations).forEach(text => {
      expect(screen.getByText(text)).toBeOnTheScreen();
    });
  });

  it('should home screen use texts from "tr" translation', () => {
    i18n.changeLanguage('tr');
    render(<Home navigation={actualNav} />);

    const translations =
      resources['tr' as keyof typeof resources].translation.home;
    Object.values(translations).forEach(text => {
      expect(screen.getByText(text)).toBeOnTheScreen();
    });
  });
});
