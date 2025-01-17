import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();
});

test('Locating Child Elements', async ({ page }) => {
  // below is the code snippet to locate child elements
  await page.locator('nb-card nb-radio :text-is("Option 1")').click();

  // This is equivalent to the above code snippet
  await page
    .locator('nb-card')
    .locator('nb-radio')
    .locator(':text-is("Option 2")')
    .click();

  await page
    .locator('nb-card')
    .getByRole('button', { name: 'Sign In' })
    .first()
    .click();

  // NOT RECOMMENDED
  await page.locator('nb-card').nth(3).getByRole('button').click();
});
