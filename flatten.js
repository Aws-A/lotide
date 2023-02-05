const flatten = function(arr){
  //let arrAll =[];
  let arrNest = [];
  //var index = [];
  for (var i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])) {
       arrNest.push(arr[i]);
      //arrAll = arr.concat(arr[i]);
      //index.push(i);
    }
  }
  //for (var j = 0; j < arrNest.length; j++) {
 // var arrAll = arr.concat(arrNest);
   //console.log(index[j]);
  //}
  console.log(arrNest);
  //console.log(arrAll);
}
flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]