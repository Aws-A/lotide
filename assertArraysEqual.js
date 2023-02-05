const assertArraysEqual = function(actual, expected) {
  var count = 0;
  for (var i = 0; i < actual.length; i++){
    if (actual[i] === expected[i]) {
      count = count + 1; 
    }
  }
  if (count === actual.length){
    return "The arrays are similar";
  } else {
    return "The arrays are different";
  }
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));
