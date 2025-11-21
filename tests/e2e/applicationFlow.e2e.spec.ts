// tests/e2e/applicationFlow.e2e.spec.ts
import { test, expect } from "@playwright/test";

test("Complete hiring flow", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.fill("#email", "client@example.com");
  await page.fill("#password", "password123");
  await page.click("button[type=submit]");

  await page.goto("/projects/new");
  await page.fill("#title", "Landing page");
  await page.click("#submit");

  expect(page.url()).toContain("/projects");
});
