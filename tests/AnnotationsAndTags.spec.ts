import { test } from "@playwright/test";

test.skip("Test One", async ({ page }) => {});
test("not yet ready", async ({ page }) => {
  await page.goto("https://www.google.com/");
  test.fail();
});

test.fixme("Test to be fixed", async ({ page }) => {});

// test.only
test("slow test @santhosh", async ({ page }) => {
  test.slow();
});
