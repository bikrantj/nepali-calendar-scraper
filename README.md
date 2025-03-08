NOTE: This project is developed only for educational purposes.

# nepali-calendar-scraper
This script scrapes calendar data from [Hamro Patro](https://www.hamropatro.com).

#### data.json
The `data.json` file contains already scraped data. However `tithis` and `events` data are not available for upcoming years.
If you want to use _calendar-data_ directly, you can download and use `data.json` directly. 
You can also access the json data through an api request like:
```ts
fetch('https://raw.githubusercontent.com/bikrantj/nepali-calendar-scraper/main/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);  // Do something with the data
  })
  .catch(error => console.error('Error fetching the JSON file:', error));

```
Or through `cURL` request:
```bash
curl https://raw.githubusercontent.com/bikrantj/nepali-calendar-scraper/main/data.json
```
> The `tithis` and `events` will be updated once they are available on [Hamro Patro](https://www.hamropatro.com).

#### Running Project locally:

1. Make sure you've installed `Google Chrome` and  [Bun Runtime](https://bun.sh) in your machine.

2. Clone the repo:
```bash
git clone git@github.com:bikrantj/nepali-calendar-scraper.git
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
