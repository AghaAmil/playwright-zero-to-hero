import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();
});

test('User Facing Locators', async ({ page }) => {
  // get by label
  await page.getByRole('textbox', { name: 'Email' }).first().click();
  await page.getByRole('button', { name: 'Sign In' }).first().click();

  // get by label
  await page.getByLabel('Email').first().click();

  // get by placeholder
  await page.getByPlaceholder('Jane Doe').click();

  // get by text
  await page.getByText('Using the Grid').click();

  // get by test id
  await page.getByTestId('SignIn').click();

  // get by title

  await page.getByTitle('IoT Dashboard').click();
});
