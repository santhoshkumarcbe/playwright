import { test, expect } from "@playwright/test";

test("selectors", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  // await page.pause();
  await page.click("id=user-name");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page
    .locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    .click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await page.getByText("$15.99Remove").click();
  await page.locator('[data-test="remove-sauce-labs-onesie"]').click();
  await page.getByText("Get your testing superhero on").click({
    button: "right",
  });
  await page.getByText("Get your testing superhero on").click();
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});
