const _ = require('../index');

console.log(_.assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(_.assertArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(_.assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
console.log(_.assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));