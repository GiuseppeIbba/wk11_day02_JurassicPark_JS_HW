const assert = require('assert');
const Park = require('../park');
const Dinosaur = require('../dinosaur');

describe('Park', function() {

  it('should start with an empty enclosure', function() {
    park = new Park();
    const actual = park.enclosure;
    assert.deepStrictEqual(actual, []);
  })

  it('should be able to add dinosaurs to it', function() {
    park = new Park();
    dinosaur = new Dinosaur('T-Rex',1);
    park.addToEnclosure(dinosaur);
    const actual = park.enclosure.length;
    assert.deepStrictEqual(actual, 1);
  })


})
