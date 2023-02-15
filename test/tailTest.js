const assert = require('chai').assert;
const tail = require('../tail');

const result = ["Hello", "Lighthouse", "Labs"];

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns Labs for result", () => {
    assert.strictEqual(tail(result), "Labs");
  });

  it("returns Labs for words", () => {
    assert.strictEqual(tail(words), "Labs"); 
  });

});