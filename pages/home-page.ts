import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly heroHeading: Locator;
  readonly getStartedLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heroHeading = page.locator('h1');
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }
}
