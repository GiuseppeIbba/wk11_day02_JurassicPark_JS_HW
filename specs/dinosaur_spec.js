const assert = require('assert');
const Dinosaur = require('../dinosaur');

describe('Dinosaur', function() {

  beforeEach(function() {
    dinosaur = new Dinosaur('Velociraptor',4);
  })

it('should have a type', function() {
  const actual = dinosaur.type;
  assert.strictEqual(actual, 'Velociraptor');
})

it('should have number of offspring per year', function () {
  const actual = dinosaur.offspring_py;
  assert.strictEqual(actual,4);
})
})
