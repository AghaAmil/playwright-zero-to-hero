import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();
});

test('Locating Parent Element', async ({ page }) => {
  await page
    .locator('nb-card', { hasText: 'Using the Grid' })
    .getByRole('textbox', { name: 'Email' })
    .click();

  await page
    .locator('nb-card', { has: page.locator('#inputEmail1') })
    .getByRole('textbox', { name: 'Email' })
    .click();

  // using filter method
  await page
    .locator('nb-card')
    .filter({ hasText: 'Basic form' })
    .getByRole('textbox', { name: 'Email' })
    .click();
  await page
    .locator('nb-card')
    .filter({ has: page.locator('.status-danger') })
    .getByRole('textbox', { name: 'Password' })
    .click();

  await page
    .locator('nb-card')
    .filter({ has: page.locator('nb-checkbox') })
    .filter({ hasText: 'Sign In' })
    .getByRole('textbox', { name: 'Password' })
    .click();

  // NOT RECOMMENDED
  await page
    .locator(':text-is("Using the Grid")')
    .locator('..')
    .getByRole('textbox', { name: 'Email' })
    .click();
});
