import type { ElementHandle } from "puppeteer";

export async function getIsHoliday(li: ElementHandle): Promise<boolean> {
  return await li.evaluate((el) => el.classList.contains("holiday"));
}
