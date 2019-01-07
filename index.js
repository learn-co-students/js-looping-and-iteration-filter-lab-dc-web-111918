function findMatching(driversArray, string) {
  return driversArray.filter(function(driverName){
    return driverName.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(driversArray, string) {
  return driversArray.filter(function(driver) {
    return driver.startsWith(string);
  })
}

function matchName(driversArray, string) {
  return driversArray.filter(function(driver){
    return driver.name === string;
  })
}
