import { test } from "@playwright/test";

// playwright has 4 hooks
// beforeAll, beforeEach, afterEach, afterAll

// execute before all tests
// test.beforeAll(async ({ page }) => {});

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test.describe("The First Suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
  });

  test("The First Test", async ({ page }) => {
    await page.getByText("Forms Layouts").click();
  });

  test('Navigate to "Datapicker" Page', async ({ page }) => {
    await page.getByText("Datapicker").click();
  });
});

test.describe("The Second Suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Charts").click();
  });

  test("The First Test", async ({ page }) => {
    await page.getByText("Chart.js").click();
  });

  test('Navigate to "Echarts" Page', async ({ page }) => {
    await page.getByText("Echarts").click();
  });
});

// execute after each tests
// test.afterEach(async ({ page }) => {});

// Test Structure

/*

test("The First Test", ({ page }) => {
  page.goto("http://localhost:4200/");
});

test.describe("The First Suite", () => {
  test("The First Test", () => {});
  test("The Second Test", () => {});
  test("The Third Test", () => {});
});

test.describe("The Second Suite", () => {
  test("The First Test", () => {});
  test("The Second Test", () => {});
  test("The Third Test", () => {});
});

*/
