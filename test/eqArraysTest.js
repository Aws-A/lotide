const _ = require("../index");

console.log(_.eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(_.eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(_.eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(_.eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

_.assertArraysEqual([1, 2, 3], [1, 2, 3]);
_.assertArraysEqual([1, 2, 3], [3, 2, 1]);

_.assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
_.assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);