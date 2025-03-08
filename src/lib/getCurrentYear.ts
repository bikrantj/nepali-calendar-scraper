/**
 * Get the current year from the select dropdown with id `selectYear`, which is currently being scraped
 */

import type { Page } from "puppeteer";

export async function getCurrentYear(page: Page): Promise<string> {
  const year = await page.$eval(
    "select#selectYear > option[selected]",
    (option) => option.value
  );
  return year;
}
