const eqObjects = function(object1, object2) {
  count = 0;
  res = 0
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (var i = 0; i < Object.keys(object1).length; i++) {
      for (var j = 0; j < Object.keys(object2).length; j++) {
        if (Object.keys(object1)[i] === Object.keys(object1)[j] && Object.values(object1)[i] === Object.values(object1)[j]) {
         count = count + 1;
        }
      }
    }
      if ( count === Object.keys(object1).length) {
        return res = 1;
      } else {
        return res = 0;
      }
  } else {
    return res = 0;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  eqObjects(actual, expected);
  if (res === 1) {
    console.log("✅✅✅ Assertion Passed!" + actual + " === " + expected);
  } else if (res === 0){
    console.log("🛑🛑🛑 Assertion Failed!" + actual + " !== " + expected);
  }
};

const objA = { a: '1', b: 2 };
const objB = { b: 2, a: '1' };

const objC = { z: '15', x: 10};
const objD = { l: 5, m: '3', n: 16};

assertObjectsEqual(objA, objB);
assertObjectsEqual(objC, objD);