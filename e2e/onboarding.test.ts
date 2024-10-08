import {by, device, element, expect} from 'detox';

describe('Onboarding Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should complete onboarding and navigate to home', async () => {
    const getStartedButton = element(by.text(/get started/i));
    await expect(getStartedButton).toBeVisible();
    await getStartedButton.tap();

    const continueButton = element(by.text(/continue/i));
    await expect(continueButton).toBeVisible();

    await device.takeScreenshot('Onboarding-screen1');
    await continueButton.tap();
    await device.takeScreenshot('Onboarding-screen2');
    await continueButton.tap();
    await device.takeScreenshot('paywall-screen');

    const subscribeButton = element(by.text(/try free for 3 days/i));
    const closeButton = element(by.id(/closeButton/i));
    await expect(subscribeButton).toBeVisible();
    await expect(closeButton).toBeVisible();

    await closeButton.tap();
    const welcomeMessage = element(by.text(/hi, plant lover!/i));
    await expect(welcomeMessage).toBeVisible();
    // eslint-disable-next-line testing-library/await-async-utils
    await waitFor(element(by.text(/get started?/i)))
      .toBeVisible()
      .withTimeout(5000); // waits up to 5 seconds
    await device.takeScreenshot('home-screen');

    const premiumBoxButton = element(by.id(/premiumBox/i));
    await expect(premiumBoxButton).toBeVisible();
    await premiumBoxButton.tap();
    await expect(subscribeButton).toBeVisible();

    await closeButton.tap();
    await expect(welcomeMessage).toBeVisible();

    await element(by.text(/profile/i)).tap();
    await element(by.text(/get started/i)).tap();

    await device.takeScreenshot('get-started-screen');
  });

  it('should open home flow after paywall screen is closed even app is re-launched', async () => {
    const getStartedButton = element(by.text(/get started/i));
    await expect(getStartedButton).toBeVisible();
    await getStartedButton.tap();

    const continueButton = element(by.text(/continue/i));
    await expect(continueButton).toBeVisible();

    await continueButton.tap();
    await continueButton.tap();

    const subscribeButton = element(by.text(/try free for 3 days/i));
    const closeButton = element(by.id(/closeButton/i));
    await expect(subscribeButton).toBeVisible();
    await expect(closeButton).toBeVisible();

    await closeButton.tap();
    const welcomeMessage = element(by.text(/hi, plant lover!/i));
    await expect(welcomeMessage).toBeVisible();
    // eslint-disable-next-line testing-library/await-async-utils
    await waitFor(element(by.text(/get started?/i)))
      .toBeVisible()
      .withTimeout(5000); // waits up to 5 seconds

    await device.launchApp({newInstance: true});

    await expect(welcomeMessage).toBeVisible();
    // eslint-disable-next-line testing-library/await-async-utils
    await waitFor(element(by.text(/get started?/i)))
      .toBeVisible()
      .withTimeout(5000); // waits up to 5 seconds
  });

  it('should open onboarding flow if paywall screen is not closed even app is re-launched', async () => {
    await device.launchApp({delete: true});
    const getStartedButton = element(by.text(/get started/i));
    await expect(getStartedButton).toBeVisible();
    await getStartedButton.tap();

    const continueButton = element(by.text(/continue/i));
    await expect(continueButton).toBeVisible();

    await continueButton.tap();
    await continueButton.tap();

    const subscribeButton = element(by.text(/try free for 3 days/i));
    const closeButton = element(by.id(/closeButton/i));
    await expect(subscribeButton).toBeVisible();
    await expect(closeButton).toBeVisible();

    await device.launchApp({newInstance: true});

    await expect(getStartedButton).toBeVisible();
  });
});
