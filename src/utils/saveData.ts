import { DATA_FILE } from "../constants/data";
import type { CalendarData } from "../constants/types";
import { writeFile } from "fs/promises";

export async function saveData(data: CalendarData) {
  await writeFile(DATA_FILE, JSON.stringify(data), "utf-8");
}
