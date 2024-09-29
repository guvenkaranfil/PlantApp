import {by, device, element,expect} from 'detox';

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

    await continueButton.tap();
    await continueButton.tap();

    const subscribeButton = element(by.text(/try free for 3 days/i));
    const closeButton = element(by.id(/closeButton/i));
    await expect(subscribeButton).toBeVisible();
    await expect(closeButton).toBeVisible();

    await closeButton.tap();
    const welcomeMessage = element(by.text(/hi, plant lover!/i));
    await expect(welcomeMessage).toBeVisible();

    const premiumBoxButton = element(by.id(/premiumBox/i));
    await expect(premiumBoxButton).toBeVisible();
    await premiumBoxButton.tap();
    await expect(subscribeButton).toBeVisible();

    await closeButton.tap();
    await expect(welcomeMessage).toBeVisible();
  });
});
