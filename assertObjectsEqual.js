const eqObjects = require("./eqObjects");
const util = require("util");

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const res = eqObjects(actual, expected); 
  if (res) {
    console.log("✅✅✅ Assertion Passed!" + util.inspect(actual) + " === " + util.inspect(expected));
  } else {
    console.log("🛑🛑🛑 Assertion Failed!" + util.inspect(actual) + " !== " + util.inspect(expected));
  }
};

const objA = { a: '1', b: 2 };
const objB = { b: 2, a: '1' };

const objC = { z: '15', x: 10};
const objD = { l: 5, m: '3', n: 16};

assertObjectsEqual(objA, objB);
assertObjectsEqual(objC, objD);

module.exports = assertObjectsEqual;