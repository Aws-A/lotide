const findKey = function(object, callback){
  for (let i = 0; i < Object.keys(object).length; i++) {
    let objNest = Object.values(object)[i]
    if (callback(objNest)){
      return Object.keys(object)[i];
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

module.exports = findKey;