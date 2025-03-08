import type { ElementHandle } from "puppeteer";

export async function getNepaliDay(li: ElementHandle): Promise<string> {
  return await li.evaluate(
    (el) => el.querySelector(".nep")?.textContent?.trim() || ""
  );
}
