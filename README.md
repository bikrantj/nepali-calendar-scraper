NOTE: This project is developed only for educational purposes.

# nepali-calendar-scraper

#### Running Project locally:

1. Make sure you've installed `Google Chrome` and  [Bun Runtime](https://bun.sh) in your machine.

2. Clone the repo:
```bash
git clone https://www.github.com/bikrantj/nepali-calendar.scraper.git
```

3. Install dependencies
```bash
bun install
```

4. Inside `src/index.ts`:
In this block of code at the end of file, change the value of `scrapeCalendarData()` to get the data for `n` months starting from current month.

```ts
// 5 means get data for next 5 months
scrapeCalendarData(5).catch((err) => {
  console.error("Main execution failed:", err);
  process.exit(1);
});
```

5. Run the scraper:
```bash
bun src/index.ts
```
