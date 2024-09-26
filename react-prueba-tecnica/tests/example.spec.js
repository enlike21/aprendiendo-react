// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL ='http://localhost:5173/'
test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph')

  const textcontent = await text.textContent();

  await expect(textcontent?.length).toBeGreaterThan(0);
});