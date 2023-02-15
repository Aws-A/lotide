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

module.exports = eqArrays;