import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 17'],
});

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');
  await page.getByRole('heading', { name: 'Test Login page for' }).click();
  await expect(page.getByRole('heading', { name: 'Test Login page for' })).toBeVisible();
});