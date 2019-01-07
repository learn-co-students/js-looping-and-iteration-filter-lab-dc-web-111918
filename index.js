// Code your solution in this file
function findMatching (driversArray, name) {
  return driversArray.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (driversArray, letterName) {
  return driversArray.filter(function (driver) {
    return driver.startsWith(letterName);
  })
}

function matchName (driversArray, name ) {
  return driversArray.filter(function (driver) {
    return driver.name === name;
  })
}
