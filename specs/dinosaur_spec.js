const assert = require('assert');
const Dinosaur = require('../dinosaur');

describe('Dinosaur', function() {

it('should have a type', function() {
  dinosaur = new Dinosaur('Velociraptor');
  const actual = dinosaur.type;
  assert.strictEqual(actual, 'Velociraptor');
})

it('should have number of offspring per year', function () {
  dinosaur = new Dinosaur('Velociraptor', 4);
  const actual = dinosaur.offspring_py;
  assert.strictEqual(actual,4);
})
})
