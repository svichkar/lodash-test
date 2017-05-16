/**
 * Created by svichkar on 5/15/17.
 */

const assert = require('chai').assert;
const _ = require('lodash/');

describe('App test', function() {
  it('should return false', function() {
    assert.equal(_.isArray({}), false);
  })
});