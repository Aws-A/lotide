const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed!" + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed!" + actual + " !== " + expected);
  }
};

  const letterPositions = function(sentence) {
    const results = {};
    var arr = [];
    // logic to update results here
    for (var i = 0; i < sentence.length; i++) {
      if (sentence[i] !== ' ') {
        if (results[sentence[i]]) {
          results[sentence[i]] = [...results[sentence[i]], i]
        } else {
          results[sentence[i]] = [i];
        }
      }
    }
    return results;
  };
  

console.log(letterPositions("lighthouse in the house"));