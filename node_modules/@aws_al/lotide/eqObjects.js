// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  count = 0;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (var i = 0; i < Object.keys(object1).length; i++) {
      for (var j = 0; j < Object.keys(object2).length; j++) {
        if (Object.keys(object1)[i] === Object.keys(object1)[j] && Object.values(object1)[i] === Object.values(object1)[j]) {
         count = count + 1;
        }
      }
    }
      if ( count === Object.keys(object1).length) {
        console.log ("true");
      } else {
        console.log ("false");
      }
  } else {
    console.log (false);
  }
};


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