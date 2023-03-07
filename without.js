const assertArraysEqual = require('./assertArraysEqual.js');

const without = function(source, itemsToRemove){
  const resultArr = [];
  for (let i = 0; i < source.length; i++) {

      if (!itemsToRemove.includes(source[i])) {
        resultArr.push(source[i]);
      }

  }
  return resultArr;
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;