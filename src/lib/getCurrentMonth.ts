import type { Page } from "puppeteer";
import { monthMappings } from "../constants/data";

/**
 * Get the current month from the select dropdown with id `selectMonth`, which is currently being scraped
 */
export async function getCurrentMonth(page: Page): Promise<string> {
  const monthIndex = await page.$eval(
    "select#selectMonth > option[selected]",
    (option) => option.value
  );
  if (!monthIndex) throw new Error("Month index not found");
  const month = monthMappings[monthIndex as keyof typeof monthMappings];
  return month;
}
