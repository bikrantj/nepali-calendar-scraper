import { dayMappings } from "../constants/data";

interface DayMapping {
  en: string;
  np: string;
}

/**
 *
  const day = dayMappings[dayNumber as keyof typeof dayMappings];
 * @returns The week day of the date: Saturday
 * @example
 * ```
 * const day = getWeekDay('March 08, 2025')
 * console.log(day)
 * {
 *   "en": "Saturday",
 *   "np": "शनिबार"
 * }
 * ```

 */
export function getWeekDay(date: string) {
  const dayNumber = new Date(date).getDay() + 1;
  const day = dayMappings[dayNumber];
  return day;
}
