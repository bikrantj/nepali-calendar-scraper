import type { ElementHandle } from "puppeteer";

export async function getFullDay(
  li: ElementHandle
): Promise<{ nepaliFullDate: string; englishFullDate: string }> {
  const nepaliFullDate = await li.evaluate(
    (el) =>
      el.querySelector(".daydetailsPopOver .col1 span")?.textContent?.trim() ||
      ""
  );
  const englishFullDate = await li.evaluate(
    (el) =>
      el.querySelector(".daydetailsPopOver .col2")?.textContent?.trim() || ""
  );
  return { nepaliFullDate, englishFullDate };
}
