import puppeteer, { Browser, Page } from "puppeteer";
import ora, { type Ora } from "ora";
import { DATA_FILE, URL } from "./constants/data";
import type { DayDetails } from "./constants/types";
import { getCurrentMonth } from "./lib/getCurrentMonth";
import { getCurrentYear } from "./lib/getCurrentYear";
import { getEnglishDay } from "./lib/getEnglishDay";
import { getEvent } from "./lib/getEvent";
import { getFullDay } from "./lib/getFullDay";
import { getIsHoliday } from "./lib/getIsHoliday";
import { getNepaliDay } from "./lib/getNepaliDay";
import { getTithi } from "./lib/getTithi";
import { getWeekDay } from "./lib/getWeekDay";
import { loadExistingData } from "./utils/loadExistingData";
import { saveData } from "./utils/saveData";

async function launchBrowser() {
  return await puppeteer.launch({ headless: true });
}

async function setupPage(browser: Browser) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1920 });
  await page.goto(URL, {
    waitUntil: "domcontentloaded",
  });
  await page.waitForSelector("ul.dates", { timeout: 5000 });
  return page;
}

// --- Helper Functions for Data Extraction ---
async function scrapeMonthData(
  page: Page,
  spinner: Ora
): Promise<DayDetails[]> {
  const liElements = await page.$$("ul.dates > li");
  const calendarDays: DayDetails[] = [];

  for (const li of liElements) {
    const dateId = await li.evaluate((el) => el.id);
    if (dateId === "0") {
      continue; // Skip id="0" entries
    }

    const nepaliDay = await getNepaliDay(li);
    const englishDay = await getEnglishDay(li);
    const isHoliday = await getIsHoliday(li);
    const { nepaliFullDate, englishFullDate } = await getFullDay(li);
    const event = await getEvent(li);
    const tithi = await getTithi(li);
    const weekDay = getWeekDay(englishFullDate);

    calendarDays.push({
      nepaliDay,
      englishDay,
      isHoliday,
      nepaliFullDate,
      englishFullDate,
      event,
      tithi,
      weekDay,
    });
  }
  return calendarDays;
}

// --- Main Function (unchanged except type) ---
async function scrapeCalendarData(monthCount: number = 2) {
  const spinner = ora("Setting up scraper...").start();
  const browser = await launchBrowser();
  try {
    const page = await setupPage(browser);
    let calendarData = await loadExistingData();

    for (let i = 0; i < monthCount; i++) {
      const year = await getCurrentYear(page);
      const month = await getCurrentMonth(page);
      spinner.start(`Scraping data for ${year} ${month}...`);
      const days = await scrapeMonthData(page, spinner);

      if (!calendarData[year]) {
        calendarData[year] = {};
      }
      calendarData[year][month] = days;

      await saveData(calendarData);

      if (i < monthCount - 1) {
        const nextButtonSelector = "a.next";
        const nextButton = await page.$(nextButtonSelector);
        if (!nextButton) {
          spinner.warn("No next month button found, stopping.");
          break;
        }
        await nextButton.click();
        await page.waitForSelector("ul.dates", { timeout: 5000 });
      }
    }
  } catch (error) {
    spinner.fail("Scraping failed.");
    console.error("Scraping failed:", error);
    throw error;
  } finally {
    await browser.close();
    spinner.succeed(`Scraping completed. See ${DATA_FILE} for data.`);
  }
}

// Run the scraper
scrapeCalendarData(2).catch((err) => {
  console.error("Main execution failed:", err);
  process.exit(1);
});
