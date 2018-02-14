const assert = require('assert');
const Park = require('../park');

describe('Park', function() {

  it('should start with an empty enclosure', function() {
    park = new Park();
    const actual = park.enclosure;
    assert.deepStrictEqual(actual, []);
  })

})
