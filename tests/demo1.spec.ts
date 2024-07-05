import { test } from "@playwright/test";

test("Demo 1", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.pause();
});
