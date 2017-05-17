/**
 * Created by svichkar on 5/15/17.
 */

const assert = require('chai').assert;
const _array = require('lodash/array');

describe('App', function () {

  it('should return hello', function () {
    var chunkArray = _array.chunk(['a', 'b', 'c', 'd'], 2);
    console.log(chunkArray);
    assert.equal(chunkArray.length, 2);
  })
});