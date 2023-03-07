// TEST/ASSERTION FUNCTIONS

// ACTUAL FUNCTION
let num;
const middle = function(array) {
  //...
  if (array.length < 3) {
      return [];
  } else if (array.length % 2 === 0) {
    let arrD = [];
    num = array.length / 2;
    arrD.push(array[num - 1]);
    arrD.push(array[num]);
    return arrD;

  } else if (array.length % 2 !== 0) {
    let arrN = [];
    num = Math.ceil(array.length/2);
    arrN.push(array[num - 1]);
    return arrN;
  }
}

module.exports = middle;