// src/types.ts
export interface DayDetails {
  /**
   * Nepali day (1-32) in number
   */
  nepaliDay: string;

  /**
   * English day (1-32) in number
   */
  englishDay: string;

  /**
   * Is the day a holiday?
   *@example false/true
   */
  isHoliday: boolean;

  /**
   * Full date in Nepali
   * @example "२२ फागुन २०८१, बिहिवार"
   */
  nepaliFullDate: string;

  /**
   * Full date in English
   * @example "March 08, 2025, Saturday"
   */
  englishFullDate: string;

  /**
   * Event(s) on the day, separated by "/"
   * @example  "महाशिवरात्रि व्रत/सिलाचःह्रे पूजा/सेना दिवस"
   *
   */
  event: string;

  /**
   * Tithi of the day
   * @example "त्रयोदशी"
   */
  tithi: string;

  /**
   * Week day of the day
   * @example
   * ```
   * {
   * "en": "Saturday",
   * "np": "शनिबार"
   * }
   * ```
   */
  weekDay: WeekDayData;
}

export interface MonthData {
  [month: string]: DayDetails[];
}

export interface CalendarData {
  [year: string]: MonthData;
}

export interface WeekDayData {
  en: string;
  np: string;
}
