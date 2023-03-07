// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqArrays = require("./eqArrays");
const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const i of Object.keys(object1)) {
      
      if (object1[i] instanceof Array && object2[i] instanceof Array) {
  
        if (!eqArrays(object1[i], object2[i])) return false;

      } else if (object1[i] !== object2[i]) {
          return false;
      } 
    }
    return true;  
  } else {
    return false;
  }
}


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false

    // Test case #1
    const obj1 = { a: [1, 2], b: 1 };
    const obj2 = { a: [1, 3], b: 1 };
  eqObjects(obj1, obj2); // expected => false

    // Test case #2
    const obj3 = {b: [2,3], a:1 };
    const obj4 = { b: [2,3], a: 2};
  eqObjects(obj3, obj4); // expected => false

  module.exports = eqObjects;