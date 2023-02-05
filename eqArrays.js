const eqArrays = function(actual, expected) {
  var count = 0;
  for (var i = 0; i < actual.length; i++){
    if (actual[i] === expected[i]) {
      count = count + 1; 
    }
  }
  if (count === actual.length){
    console.log("✅✅✅ Assertion Passed! " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed!" + actual + " !== " + expected);
  }
};

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false