function findMatching (drivers, driverName) {
  return drivers.filter(function (ele) {
    return ele.toUpperCase() === driverName.toUpperCase();
  });
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function (ele) {
    const lettersLength = letters.length;
    return ele.slice(0, lettersLength) === letters;
  });
}

function matchName(drivers, driverName) {
  return drivers.filter(function (driverObj) {
    return driverObj.name === driverName;
  });
}
