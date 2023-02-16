const findKey = function(object, callback){
  for (var i = 0; i < Object.keys(object).length; i++) {
    var objNest = Object.values(object)[i]
    if (callback(objNest)){
      console.log(Object.keys(object)[i]);
      break;
    }
  }
};


findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"