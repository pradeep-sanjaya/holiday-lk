# node-holiday-jp

Holidays in Sri Lanka [holiday-lk](https://github.com/ngpsanjaya/holiday-lk)

## Installation

```
npm install holiday-lk
```

## Usage

```javascript
var holiday = require('holiday-lk')

// find holidays between 2019/01/10 ~ 2019/01/20
// returns Array of Object (see below for their properties)
holiday.between(new Date(2019, 1, 10), new Date(2019, 1, 20))

// whether given date is holiday or not
// return true (or false)
holiday.isHoliday(new Date(2019, 12, 25))
```

## Properties

* `name: String` - name of the holiday (ex. "")
* `nameEn: String` - English translation (ex. "National Culture Day")
* `wdayName: String` - day of the week (ex. "月")
* `date: Date` - Date object of the holiday (ex. Mon Nov 03 2014 00:00:00 GMT+0900 (IST))

## License

MIT
