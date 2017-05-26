/**
 * Created by svichkar on 5/15/17.
 */

const expect = require("chai").expect;
const _array = require('lodash/array');
const _isEqual = require('lodash/isEqual');

describe('Array module', function () {

  context('#chunk(array, [size=1])', function () {

    it('Should split `array` into groups the length of `size`', function () {

      //given
      let array = ['a', 'b', 'c', 'd', 'e'];
      //when
      let chunkArray = _array.chunk(array, 2);
      //then
      expect(chunkArray).to.have.length(3);
    });

    it('Should split `array` into single element groups when `size` is not specified', function () {

      //given
      let array = ['a', 'b', 'c', 'd', 'e'];
      //when
      let chunkArray = _array.chunk(array);
      //then
      expect(chunkArray).to.have.length(array.length);
    });

    it('Should not change existing array', function () {

      //given
      let array = ['a', 'b', 'c', 'd', 'e'];
      let lengthBefore = array.length;
      //when
      let chunkArray = _array.chunk(array, 4);
      let lengthAfter = array.length;
      //then
      expect(lengthBefore).to.be.equal(lengthAfter);
    });

  });

  context('#flattenDepth(array, [depth=1]', function () {

    it('Recursively flatten array up to depth times', function () {

      //given
      let array = [1, [2, [3, [4]], 5]];

      //when
      let flatten = _array.flattenDepth(array, 2);

      //then
      expect(flatten).eql([1, 2, 3, [4], 5]);
    });

  });

  context('#intersectionBy([arrays], [iteratee=_.identity])', function () {

    it('Should invoked iteratee for each element of each arrays', function () {

      //given
      let array1 = [{ 'x': 1 }];
      let array2 = [{ 'x': 2 }, { 'x': 1 }];

      //when
      let flatten = _array.intersectionBy(array1, array2, 'x');

      //then
      expect(flatten).eql([{ 'x': 1 }]);
    });

  });

  context('#nth(array, [n=0])', function () {

    it('Should return element at index n of array', function () {

      //given
      let array = ['a', 'b', 'c', 'd'];

      //when
      let nth = _array.nth(array, -2);

      //then
      expect(nth).eql('c');
    });

  });

  context('#pullAllWith(array, values, [comparator])', function () {

    it('Should invoke comparator to compare elements of array to values', function () {

      //given
      let array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];

      //when
      _array.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _isEqual);

      //then
      expect(array).eql([{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]);
    });

  });

  context('#unionBy([arrays], [iteratee=_.identity])', function () {

    it('Should invoke iteratee for each element and return array of unique values', function () {

      //given
      let array1 = [{ 'x': 1 }];
      let array2 = [{ 'x': 2 }, { 'x': 1 }];

      //when
      let result = _array.unionBy(array1, array2, 'x');

      //then
      expect(result).eql([{ 'x': 1 }, { 'x': 2 }]);
    });

  });

  context('#xor([arrays])', function () {

    it('Should return an array of unique values that is the symmetric difference of the given arrays', function () {

      //given
      let array1 = [1, 2];
      let array2 = [2, 3];

      //when
      let result = _array.xor(array1, array2);

      //then
      expect(result).eql([1, 3]);
    });

  });

  context('#zip([arrays])', function () {

    it('Should create an array of grouped elements', function () {

      //given
      let array1 = [1, 2];
      let array2 = ['a', 'b'];
      let array3 = [true, false];

      //when
      let result = _array.zip(array1, array2, array3);

      //then
      expect(result).eql([[1, 'a', true], [2, 'b', false]]);
    });

  });

});