import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();
});

test('Locator Syntax Rules', async ({ page }) => {
  // by tag name
  await page.locator('input').first().click();

  // by id
  page.locator('inputEmail1');

  // by class
  page.locator('.shape-rectangle');

  // by attribute
  page.locator('[type="email"]');

  // by class value (full)
  page.locator(
    '[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]'
  );

  // combine multiple locators
  page.locator('input[type="email"].shape-rectangle[nbinput]');

  // by XPath (NOT RECOMMENDED)
  page.locator('//*[@id="inputEmail1"]');

  // by partial text match
  page.locator(':text("Using")');

  // by exact text match
  page.locator(':text-is("Using the Grid")');
});
