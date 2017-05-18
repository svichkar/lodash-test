/**
 * Created by svichkar on 5/15/17.
 */

const assert = require('chai').assert;
const expect = require("chai").expect;
const _array = require('lodash/array');

describe('Array module', function () {

  context('#chunk()', function () {

    it('Should split `array` into groups the length of `size`.', function () {
      var chunkArray = _array.chunk(['a', 'b', 'c', 'd'], 2);
      expect(chunkArray).to.have.length(2);
    });
  });
});