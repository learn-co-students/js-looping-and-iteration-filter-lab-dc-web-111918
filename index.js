// Code your solution in this file
function findMatching(drivers, string){
	return drivers.filter(function (driverName){
		return driverName.toLowerCase() === string.toLowerCase();
	})
}

function fuzzyMatch(drivers, string){
	return drivers.filter((driverName) => driverName.startsWith(string));
}

function matchName(drivers, string){
	return drivers.filter((drivers) => drivers.name === string);
}