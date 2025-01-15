import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();
});

test('Reusing Locators', async ({ page }) => {
  // general way of using locator

  await page
    .locator('nb-card')
    .filter({ hasText: 'Basic form' })
    .getByRole('textbox', { name: 'Email' })
    .fill('test@test.com');

  await page
    .locator('nb-card')
    .filter({ hasText: 'Basic form' })
    .getByRole('textbox', { name: 'Password' })
    .fill('Password123');

  // saving locator to a variable
  const basicFormLocator = page
    .locator('nb-card')
    .filter({ hasText: 'Basic form' });
  const basicEmailField = basicFormLocator.getByRole('textbox', {
    name: 'Email',
  });

  await basicEmailField.fill('test@test.com');

  await basicFormLocator
    .getByRole('textbox', { name: 'Password' })
    .fill('Password123');

  await basicFormLocator.locator('nb-checkbox').click();

  await basicFormLocator.getByRole('button').click();
});
