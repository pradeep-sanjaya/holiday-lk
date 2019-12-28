
var assert = require('assert');
var holiday = require('../');

describe('holiday.between(start, end)', function () {
  it('should return all holidays between the given periad', function () {
    var start = new Date(2019, 0, 15);
    var end = new Date(2019, 0, 30);
    var holidays = holiday.between(start, end).map(function (item) { return item.name; });
    assert.deepEqual(holidays, ['Tamil Thai Pongal Day', 'Duruthu Full Moon Poya Day']);
  });

  it('should do well in the border case', function () {
    // 2019-01-15 is "Tamil Thai Pongal Day"
    var start = new Date(2019, 0, 15, 12);
    var end = new Date(2019, 0, 15, 12);
    assert.equal(holiday.between(start, end).length, 1);
  });
});

describe('holiday properties', function () {
  var thaiPongal;

  before(function () {
    var start = new Date(2019, 0, 1, 12);
    var end = new Date(2019, 0, 15, 12);
    thaiPongal = holiday.between(start, end)[0];
  });

  it('name contains its English translation', function () {
    assert.equal(thaiPongal.name, 'Tamil Thai Pongal Day');
  });

  it('dayName contains its day of the week', function () {
    assert.equal(thaiPongal.dayName, 'Wednesday');
  });

  it('date contains when the holiday is', function () {
    assert(thaiPongal.date instanceof Date);
    assert.equal(+thaiPongal.date, +new Date("2019-01-15"));
  });

  it('name contains its Japanese name', function () {
    assert.equal(thaiPongal.name, 'Tamil Thai Pongal Day');
  });
});

describe('holiday.isHoliday(date)', function () {
  it('should return true if the date is holiday', function () {
    assert.strictEqual(holiday.isHoliday(new Date(2019, 0, 15)), true);
  });

  it('should return false if the date is not holiday', function () {
    assert.strictEqual(holiday.isHoliday(new Date(2019, 0, 1)), false);
  });
});