# holiday-lk

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
holiday.between(new Date("2019-01-10"), new Date("2019-01-20"))

// whether given date is holiday or not
// return true (or false)
holiday.isHoliday(new Date(2019, 12, 25))
```

## Properties

* `dayName: String` - day of the week (ex. "Sunday")
* `date: Date` - Date object of the holiday (ex. 2019-01-15T00:00:00.000Z)
* `name: String` - name of the holiday (ex. "National Day")

## License

MIT
