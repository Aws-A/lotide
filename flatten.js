const flatten = function(arr){
  const result = [];
  for (let num of arr) {
    if (Array.isArray(num)) {
      for (let num1 of num){
        result.push(num1)
      }
    } else {
      result.push(num)
    }
  }
  return result;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));
 // => [1, 2, 3, 4, 5, 6]

 module.exports = flatten;