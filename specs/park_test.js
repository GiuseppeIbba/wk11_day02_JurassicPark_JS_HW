const assert = require('assert');
const Park = require('../park');
const Dinosaur = require('../dinosaur');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function() {
    park = new Park();
    trex = new Dinosaur('T-Rex',1);
  })

  it('should start with an empty enclosure', function() {
    const actual = park.enclosure;
    assert.deepStrictEqual(actual, []);
  })

  it('should be able to add dinosaurs to it', function() {
    park.addToEnclosure(dinosaur);
    const actual = park.enclosure.length;
    assert.deepStrictEqual(actual, 1);
  })

  it('should be able to remove all dinosaurs of a particular type', function() {

  })


})
