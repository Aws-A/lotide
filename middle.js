// TEST/ASSERTION FUNCTIONS
//const eqArrays = function(...) {
  //...
//}

const assertArraysEqual = function(actual, expected) {
  //...
}

// ACTUAL FUNCTION
var num;
const middle = function(array) {
  //...
  if (array.length < 3) {
      console.log([]);
  } else if (array.length % 2 === 0) {
    var arrD = [];
    num = array.length / 2;
    arrD.push(array[num - 1]);
    arrD.push(array[num]);
    console.log(arrD);

  } else if (array.length % 2 !== 0) {
    var arrN = [];
    num = Math.ceil(array.length/2);
    arrN.push(array[num - 1]);
    console.log(arrN);
  }
}

// TEST CODE
// ...

middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]