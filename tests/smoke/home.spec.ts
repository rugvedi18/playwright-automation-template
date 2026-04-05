import { expect, test } from '@fixtures/base-fixture';

test.describe('Home page smoke tests', () => {
  test('loads the home page', async ({ homePage }) => {
    await homePage.goto();

    await expect(homePage.heroHeading).toContainText('Playwright');
  });

  test('navigates to the getting started guide', async ({ homePage }) => {
    await homePage.goto();
    await homePage.getStartedLink.click();

    await expect(homePage.page).toHaveURL(/.*intro/);
  });
});
