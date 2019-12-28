var wdayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

module.exports = function (key, name) {
  let dt = new Date(key);
  return {
    dayName: wdayNames[dt.getDay()],
    date: dt,
    name: name
  };
};