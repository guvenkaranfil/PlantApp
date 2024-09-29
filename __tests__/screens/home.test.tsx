import React from 'react';

import * as api from '@api/index';
import Home from '@screens/home';
import {fireEvent, render, screen, waitFor} from '@src/.jest/helper/testUtils';
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
    const categories = {
      data: [
        {
          id: 11,
          name: 'fern',
          createdAt: '2023-01-11T10:53:05.801Z',
          updatedAt: '2023-01-11T10:54:30.059Z',
          publishedAt: '2023-01-11T10:53:07.416Z',
          title: 'Ferns',
          rank: 0,
          image: {
            id: 23,
            name: '6.png',
            alternativeText: null,
            caption: null,
            width: 116,
            height: 126,
            formats: null,
            hash: '6_edbcc6988a',
            ext: '.png',
            mime: 'image/png',
            size: 8.24,
            url: 'https://cms-cdn.plantapp.app/6_edbcc6988a/6_edbcc6988a.png',
            previewUrl: null,
            provider:
              '@strapi-community/strapi-provider-upload-google-cloud-storage',
            provider_metadata: null,
            createdAt: '2023-01-11T10:44:46.151Z',
            updatedAt: '2023-01-11T10:44:46.151Z',
          },
        },
        {
          id: 10,
          name: 'cacti-and-succulent',
          createdAt: '2023-01-11T10:52:28.521Z',
          updatedAt: '2023-01-11T10:54:39.391Z',
          publishedAt: '2023-01-11T10:52:36.428Z',
          title: 'Cacti and Succulents',
          rank: 1,
          image: {
            id: 25,
            name: '5.png',
            alternativeText: null,
            caption: null,
            width: 158,
            height: 152,
            formats: null,
            hash: '5_d2384a3938',
            ext: '.png',
            mime: 'image/png',
            size: 10.01,
            url: 'https://cms-cdn.plantapp.app/5_d2384a3938/5_d2384a3938.png',
            previewUrl: null,
            provider:
              '@strapi-community/strapi-provider-upload-google-cloud-storage',
            provider_metadata: null,
            createdAt: '2023-01-11T10:50:17.828Z',
            updatedAt: '2023-01-11T10:51:05.935Z',
          },
        },
        {
          id: 4,
          name: 'flowering',
          createdAt: '2023-01-11T10:44:18.862Z',
          updatedAt: '2023-01-11T10:54:54.326Z',
          publishedAt: '2023-01-11T10:44:20.185Z',
          title: 'Flowering Plants',
          rank: 2,
          image: {
            id: 22,
            name: '2.png',
            alternativeText: null,
            caption: null,
            width: 116,
            height: 126,
            formats: null,
            hash: '2_4a226c9ae7',
            ext: '.png',
            mime: 'image/png',
            size: 5.28,
            url: 'https://cms-cdn.plantapp.app/2_4a226c9ae7/2_4a226c9ae7.png',
            previewUrl: null,
            provider:
              '@strapi-community/strapi-provider-upload-google-cloud-storage',
            provider_metadata: null,
            createdAt: '2023-01-11T10:44:13.779Z',
            updatedAt: '2023-01-11T10:44:13.779Z',
          },
        },
        {
          id: 7,
          name: 'vegetable-and-fruit',
          createdAt: '2023-01-11T10:50:21.177Z',
          updatedAt: '2023-01-11T10:55:06.266Z',
          publishedAt: '2023-01-11T10:50:22.557Z',
          title: 'Vegetables and Fruits',
          rank: 3,
          image: {
            id: 25,
            name: '5.png',
            alternativeText: null,
            caption: null,
            width: 158,
            height: 152,
            formats: null,
            hash: '5_d2384a3938',
            ext: '.png',
            mime: 'image/png',
            size: 10.01,
            url: 'https://cms-cdn.plantapp.app/5_d2384a3938/5_d2384a3938.png',
            previewUrl: null,
            provider:
              '@strapi-community/strapi-provider-upload-google-cloud-storage',
            provider_metadata: null,
            createdAt: '2023-01-11T10:50:17.828Z',
            updatedAt: '2023-01-11T10:51:05.935Z',
          },
        },
        {
          id: 8,
          name: 'herb',
          createdAt: '2023-01-11T10:51:13.403Z',
          updatedAt: '2023-01-11T10:55:15.464Z',
          publishedAt: '2023-01-11T10:51:22.859Z',
          title: 'Herbs',
          rank: 4,
          image: {
            id: 25,
            name: '5.png',
            alternativeText: null,
            caption: null,
            width: 158,
            height: 152,
            formats: null,
            hash: '5_d2384a3938',
            ext: '.png',
            mime: 'image/png',
            size: 10.01,
            url: 'https://cms-cdn.plantapp.app/5_d2384a3938/5_d2384a3938.png',
            previewUrl: null,
            provider:
              '@strapi-community/strapi-provider-upload-google-cloud-storage',
            provider_metadata: null,
            createdAt: '2023-01-11T10:50:17.828Z',
            updatedAt: '2023-01-11T10:51:05.935Z',
          },
        },
        {
          id: 5,
          name: 'tree',
          createdAt: '2023-01-11T10:45:03.763Z',
          updatedAt: '2023-01-11T10:55:46.564Z',
          publishedAt: '2023-01-11T10:46:10.195Z',
          title: 'Trees',
          rank: 5,
          image: {
            id: 23,
            name: '6.png',
            alternativeText: null,
            caption: null,
            width: 116,
            height: 126,
            formats: null,
            hash: '6_edbcc6988a',
            ext: '.png',
            mime: 'image/png',
            size: 8.24,
            url: 'https://cms-cdn.plantapp.app/6_edbcc6988a/6_edbcc6988a.png',
            previewUrl: null,
            provider:
              '@strapi-community/strapi-provider-upload-google-cloud-storage',
            provider_metadata: null,
            createdAt: '2023-01-11T10:44:46.151Z',
            updatedAt: '2023-01-11T10:44:46.151Z',
          },
        },
        {
          id: 6,
          name: 'shrub',
          createdAt: '2023-01-11T10:45:51.259Z',
          updatedAt: '2023-01-11T10:56:07.609Z',
          publishedAt: '2023-01-11T10:50:41.670Z',
          title: 'Shrubs',
          rank: 6,
          image: {
            id: 24,
            name: '4.png',
            alternativeText: null,
            caption: null,
            width: 116,
            height: 126,
            formats: null,
            hash: '4_31ed0235a1',
            ext: '.png',
            mime: 'image/png',
            size: 7.96,
            url: 'https://cms-cdn.plantapp.app/4_31ed0235a1/4_31ed0235a1.png',
            previewUrl: null,
            provider:
              '@strapi-community/strapi-provider-upload-google-cloud-storage',
            provider_metadata: null,
            createdAt: '2023-01-11T10:45:32.337Z',
            updatedAt: '2023-01-11T10:45:32.337Z',
          },
        },
        {
          id: 9,
          name: 'groundcover',
          createdAt: '2023-01-11T10:51:42.646Z',
          updatedAt: '2023-01-11T11:05:56.404Z',
          publishedAt: '2023-01-11T10:51:43.919Z',
          title: 'Groundcover',
          rank: 7,
          image: {
            id: 22,
            name: '2.png',
            alternativeText: null,
            caption: null,
            width: 116,
            height: 126,
            formats: null,
            hash: '2_4a226c9ae7',
            ext: '.png',
            mime: 'image/png',
            size: 5.28,
            url: 'https://cms-cdn.plantapp.app/2_4a226c9ae7/2_4a226c9ae7.png',
            previewUrl: null,
            provider:
              '@strapi-community/strapi-provider-upload-google-cloud-storage',
            provider_metadata: null,
            createdAt: '2023-01-11T10:44:13.779Z',
            updatedAt: '2023-01-11T10:44:13.779Z',
          },
        },
        {
          id: 12,
          name: 'edible',
          createdAt: '2023-01-11T11:04:05.527Z',
          updatedAt: '2023-01-11T11:05:56.542Z',
          publishedAt: '2023-01-11T11:04:06.784Z',
          title: 'Edible Plants',
          rank: 8,
          image: {
            id: 25,
            name: '5.png',
            alternativeText: null,
            caption: null,
            width: 158,
            height: 152,
            formats: null,
            hash: '5_d2384a3938',
            ext: '.png',
            mime: 'image/png',
            size: 10.01,
            url: 'https://cms-cdn.plantapp.app/5_d2384a3938/5_d2384a3938.png',
            previewUrl: null,
            provider:
              '@strapi-community/strapi-provider-upload-google-cloud-storage',
            provider_metadata: null,
            createdAt: '2023-01-11T10:50:17.828Z',
            updatedAt: '2023-01-11T10:51:05.935Z',
          },
        },
      ],
      meta: {
        pagination: {
          page: 1,
          pageSize: 25,
          pageCount: 1,
          total: 9,
        },
      },
    };
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
