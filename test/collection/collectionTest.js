/**
 * Created by svichkar on 5/15/17.
 */

let expect = require('chai').expect;
let _collection = require('lodash/collection');

describe('Collection module', function () {

  context('#countBy(collection, [iteratee=_.identity])', function () {

    it('Should return object with numbers of times the key was returned by iteratee', function () {

      //given
      let collection = [1, 2, 1];
      function addOne(a) {
        return a + 1;
      }

      //when
      let result = _collection.countBy(collection, addOne);

      //then
      expect(result[2]).eq(2);
      expect(result[3]).eq(1);

    });
  });

  context('#some(collection, [predicate=_.identity])', function () {

    it('Should check if predicate returns truthy for any element of collection', function () {

      //given
      let collection = [null, 0, 'yes', false];

      //when
      let result = _collection.some(collection, Boolean);

      //then
      expect(result).true;
    });
  });

  context('#groupBy(collection, [iteratee=_.identity])', function () {

    it('Should object composed of keys generated from the results ' +
      'of running each element of collection thru iteratee', function () {

      //given
      let collection = ['one', 'two', 'three'];

      //when
      let result = _collection.groupBy(collection, 'length');

      //then
      expect(result['3']).eql(['one', 'two']);
      expect(result['5']).eql(['three']);
    });
  });

});