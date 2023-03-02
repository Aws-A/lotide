const without = function(source, itemsToRemove){
  for (var i = 0; i < source.length; i++) {
    for (var j = 0; j < itemsToRemove.length; j++){
      if (source[i] === itemsToRemove[j]) {
        var index = source.indexOf(source[i]);
        source.splice(index,1);
      }
    }
  }
  console.log(source);
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const assertArraysEqual = function(actual, expected) {
  var count = 0;
  for (var i = 0; i < actual.length; i++){
    if (actual[i] === expected[i]) {
      count = count + 1; 
    }
  }
  if (count === actual.length){
    console.log("The arrays are similar");
  } else {
    console.log("The arrays are different");
  }
};


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);