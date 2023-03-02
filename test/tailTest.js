const assert = require('chai').assert;
const tail = require('../tail');

const result = ["Hello", "Lighthouse", "Labs"];

const words = ["Yo Yo", "Lighthouse", "Labs"];


describe("#tail", () => {
  it("returns [ 'Lighthouse', 'Labs' ] for result", () => {
    assert.equal(tail(result).length, 2);
    assert.equal(result[0], "Lighthouse");
    assert.equal(result[1], "Labs");
  });

  it("returns [ 'Lighthouse', 'Labs' ] for words", () => {
    assert.equal(tail(words).length, 2);
    assert.equal(words[0], "Lighthouse");
    assert.equal(words[1], "Labs");
  });

});