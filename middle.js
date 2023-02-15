// TEST/ASSERTION FUNCTIONS

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

module.exports = middle;