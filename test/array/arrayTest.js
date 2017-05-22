/**
 * Created by svichkar on 5/15/17.
 */

const assert = require('chai').assert;
const expect = require("chai").expect;
const _array = require('lodash/array');

describe('Array module', function () {

  const array = ['a', 'b', 'c', 'd', 'e'];

  context('#chunk(array, [size=1])', function () {

    it('Should split `array` into groups the length of `size`', function () {

      const chunkArray = _array.chunk(array, 2);
      expect(chunkArray).to.have.length(3);
    });

    it('Should split `array` into single element groups when `size` is not specified', function () {

      const chunkArray = _array.chunk(array);
      expect(chunkArray).to.have.length(array.length);
    });

    it('Should not change existing array', function () {

      const lengthBefore = array.length;
      const chunkArray = _array.chunk(array, 4);
      const lengthAfter = array.length;
      expect(lengthBefore).to.be.equal(lengthAfter);
    });

  });

  context('#flattenDepth(array, [depth=1]', function () {

    it('Should split `array` into groups the length of `size`', function () {

      const chunkArray = _array.chunk(array, 2);
      expect(chunkArray).to.have.length(3);
    });

    it('Should split `array` into single element groups when `size` is not specified', function () {

      const chunkArray = _array.chunk(array);
      expect(chunkArray).to.have.length(array.length);
    });

    it('Should not change existing array', function () {

      const lengthBefore = array.length;
      const chunkArray = _array.chunk(array, 4);
      const lengthAfter = array.length;
      expect(lengthBefore).to.be.equal(lengthAfter);
    });

  });


});