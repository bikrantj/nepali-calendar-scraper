import type { WeekDayData } from "./types";

export const URL = "https://www.hamropatro.com/";

export const DATA_FILE = "test-data.json";

export const monthMappings: { [key: string]: string } = {
  "1": "Baisakh",
  "2": "Jestha",
  "3": "Ashad",
  "4": "Shrawan",
  "5": "Bhadra",
  "6": "Ashwin",
  "7": "Kartik",
  "8": "Mangsir",
  "9": "Poush",
  "10": "Magh",
  "11": "Falgun",
  "12": "Chaitra",
};

export const dayMappings: { [key: number]: WeekDayData } = {
  1: {
    en: "Sunday",
    np: "आइतबार",
  },
  2: {
    en: "Monday",
    np: "सोमबार",
  },
  3: {
    en: "Tuesday",
    np: "मंगलबार",
  },
  4: {
    en: "Wednesday",
    np: "बुधबार",
  },
  5: {
    en: "Thursday",
    np: "बिहिबार",
  },
  6: {
    en: "Friday",
    np: "शुक्रबार",
  },
  7: {
    en: "Saturday",
    np: "शनिबार",
  },
};
