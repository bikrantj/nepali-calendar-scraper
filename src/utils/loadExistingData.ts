import type { CalendarData } from "../constants/types";
import { readFile } from "fs/promises";
import { existsSync } from "fs";
import { DATA_FILE } from "../constants/data";
export async function loadExistingData(): Promise<CalendarData> {
  if (existsSync(DATA_FILE)) {
    try {
      const existingData = await readFile(DATA_FILE, "utf-8");
      return JSON.parse(existingData) as CalendarData;
    } catch (error) {
      console.error("Error reading data.json:", error);
    }
  }
  return {};
}
