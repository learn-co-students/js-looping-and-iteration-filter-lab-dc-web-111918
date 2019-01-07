function findMatching (list, name) {
 return list.filter(function (driver) {
   return driver.toLowerCase() === name.toLowerCase();
 });
}

function fuzzyMatch (drivers, partialName) {
  let lengthOfName = partialName.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName (drivers, name) {
  return drivers.filter(function (driverInfo) {
    return driverInfo.name.toLowerCase() === name.toLowerCase();
  });
}
