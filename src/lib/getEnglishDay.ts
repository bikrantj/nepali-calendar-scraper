import type { ElementHandle } from "puppeteer";

export async function getEnglishDay(li: ElementHandle): Promise<string> {
  return await li.evaluate(
    (el) => el.querySelector(".eng")?.textContent?.trim() || ""
  );
}
