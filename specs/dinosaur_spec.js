const assert = require('assert');
const Dinosaur = require('../dinosaur');

describe('Dinosaur', function() {

it('should have a type', function() {
  dinosaur = new Dinosaur('Velociraptor');
  const actual = dinosaur.type;
  assert.strictEqual(actual, 'Velociraptor');
})
})
