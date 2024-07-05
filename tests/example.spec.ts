import { test, expect } from "@playwright/test";

let context;
let page;

test.beforeAll(async ({ browser }) => {
  context = browser.newContext();
  await (
    await context
  ).tracing.start({
    snapshots: true,
    screenshots: true,
  });
  page = (await context).newPage();
});

test.afterAll(async () => {
  await context.tracing.stop({ path: "test2_trace.zip" });
});
test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
