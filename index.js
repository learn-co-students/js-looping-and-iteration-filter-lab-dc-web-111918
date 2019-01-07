// Code your solution in this file
// [1, 2, 3, 4, 5].filter(function (num) { return num > 3; });
// array.filter(function(currentValue, index, arr), thisValue)


function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, chars) {
  let stringLength = chars.length;
  return drivers.filter(function(driver) {
    return driver.slice(0, stringLength) === chars;
  });
}

function matchName(drivers, string) {
  return drivers.filter(function (driver){
      return driver.name.toLowerCase() === string.toLowerCase()
  })
}
