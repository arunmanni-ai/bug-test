const { test, expect } = require('@playwright/test');

test('shows client-side error for invalid email', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.fill('#email', 'test@');
  await page.click('button[type=submit]');
  const visible = await page.isVisible('#emailError');
  expect(visible).toBe(true);
});
