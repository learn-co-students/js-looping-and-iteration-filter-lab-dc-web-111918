// Code your solution in this file
function findMatching(arr, str){
  return arr.filter(function(arrName) { return str.toLowerCase() === arrName.toLowerCase(); })
};

function fuzzyMatch(arr, str){

  return arr.filter(function(foo) { return str.slice(0,2) === foo.slice(0,2); })

};

function matchName(arr, str){
  return arr.filter(function(foo) { return foo.name.toLowerCase() === str.toLowerCase(); })

};
