import { expect, test } from '@playwright/test';

test.describe('API health checks', () => {
  test('base URL responds successfully', async ({ request, baseURL }) => {
    const response = await request.get(baseURL ?? '/');

    expect(response.ok()).toBeTruthy();
  });
});
