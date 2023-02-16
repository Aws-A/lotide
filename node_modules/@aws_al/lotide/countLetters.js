const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed!" + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed!" + actual + " !== " + expected);
  }
};
const countLetters = function(phrase){

  const results = {};
  for (var i = 0; i < phrase.length; i++) {
    if (phrase[i] !== ' ') {
      if (results[phrase[i]]) {
         results[phrase[i]]+= 1;
      } else {
         results[phrase[i]] = 1;
      }
    }
  }
  return results;
}

console.log(countLetters("lighthouse in the house"));