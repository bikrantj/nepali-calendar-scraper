import type { ElementHandle } from "puppeteer";

export async function getEvent(li: ElementHandle): Promise<string> {
  const eventContent = await li.evaluate(
    (el) => el.querySelector(".event")?.textContent?.trim() || ""
  );
  let event;
  if (eventContent === "--") {
    event = "";
  } else {
    event = eventContent;
  }
  return event;
}
