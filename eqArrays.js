const eqArrays = function(actual, expected){
  if (!actual || !expected) return false;
  if (actual.length !== expected.length) return false;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]){
      return false;
    }
  }
  return true;
}

module.exports = eqArrays;