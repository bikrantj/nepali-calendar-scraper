import type { ElementHandle } from "puppeteer";

export async function getTithi(li: ElementHandle): Promise<string> {
  const tithiContent = await li.evaluate(
    (el) => el.querySelector(".tithi")?.textContent?.trim() || ""
  );
  let tithi;
  if (tithiContent === "--") {
    tithi = "";
  } else {
    tithi = tithiContent;
  }
  return tithi;
}
