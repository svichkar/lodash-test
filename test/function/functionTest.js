/**
 * Created by svichkar on 5/15/17.
 */

const expect = require("chai").expect;
const _function = require('lodash/function');

describe('Function module', function () {

  context('#after(n, func)', function () {

    it('Should execute initial function after 5th call', function () {

      //given
      let array = [];

      function addElement(element) {
        array.push(element);
      }

      let addAfterFiveCalls = _function.after(5, addElement);

      //when
      for (let i = 0; i < 6; i++) {
        addAfterFiveCalls(1);
      }

      //then
      expect(array).to.have.length(2);
    });

  });

  context('#before(n, func)', function () {

    it('Should allow adding up to 5 elements to array, but no more', function () {

      //given
      let array = [];

      function addElement(element) {
        array.push(element);
      }

      let addUpToFiveElements = _function.before(5, addElement);

      //when
      for (let i = 0; i < 10; i++) {
        addUpToFiveElements(1);
      }

      //then
      expect(array).to.have.length(4);
    });

  });

  context('#debounce(func, [wait=0], [options={leading, maxWait, trailing}])', function () {

    it('Should not be executed immediately with default params', function () {

      //given
      let result = false;

      function setTrue() {
        result = true;
      }

      let debounced = _function.debounce(setTrue, 1000);

      //when
      debounced();

      //then
      expect(result).to.be.false;
    });

    it('Should be executed immediately when options.leading=true', function () {

      //given
      let result = false;

      function setTrue() {
        result = true;
      }

      let debounced = _function.debounce(setTrue, 1000, {'leading': true});

      //when
      debounced();

      //then
      expect(result).to.be.true;
    });

  });

  context('#flip(func)', function () {

    it('Should reverse arguments of function', function () {

      //given
      let flipped = _function.flip(function () {
        return Array.from(arguments);
      });

      //when
      let array = flipped(1, 2, 3);

      //then
      expect(array).eql([3, 2, 1]);
    });

  });

  context('#memoize(func, [resolver])', function () {

    it('Should record result of execution to cache property', function () {

      //given
      let object = {'a': 1, 'b': 2};

      function getValues(object) {
        return Object.values(object);
      }

      let values = _function.memoize(getValues);

      //when
      let result = values(object);

      //then
      expect(values.cache.get(object)).to.eql(result);
    });

    it('Should set new value to cache property', function () {

      //given
      let object = {'a': 1, 'b': 2};

      function getValues(object) {
        return Object.values(object);
      }

      let values = _function.memoize(getValues);

      //when
      let result = values(object);
      values.cache.set(object, [3, 2]);

      //then
      expect(values(object)).to.eql([3, 2]);
    });

  });

  context('#once(func)', function () {

    it('Should be executed only one time for repeated calls', function () {

      //given
      let count = 0;
      function increment() {
        return count++;
      }
      let onlyOnce = _function.once(increment);

      //when
      onlyOnce();
      onlyOnce();
      onlyOnce();

      //then
      expect(count).to.eq(1);
    });

  });

  context('#overArgs(func, [transforms=[_.identity]])', function () {

    it('Should transform arguments before execution', function () {

      //given
      function returnArray(x, y) {
        return [x, y];
      }
      function increment (v) {
        return v + 1;
      }
      function decrement (v) {
        return v - 1;
      }
      let over = _function.overArgs(returnArray, [increment, decrement]);

      //when
      let result = over(2, 5);

      //then
      expect(result).to.eql([3, 4]);
    });

  });

  context('#rest(func, [start=func.length-1])', function () {

    it('Should collapse arguments to array after provided index', function () {

      //given
      function returnArray(x, y, z) {
        return [x, y, z];
      }
      let restFunc = _function.rest(returnArray, 2);

      //when
      let result = restFunc(1, 2, 3, 4, 5, 6);

      //then
      expect(result).to.have.lengthOf(3);
      expect(result[2]).to.be.instanceof(Array);
    });

  });

  context('#spread(func, [start=0])', function () {

    it('Should fill function arguments from array', function () {

      //given
      function returnArray(x, y, z) {
        return [x + 1, y + 1 , z + 1];
      }
      let spreadFunc = _function.spread(returnArray);

      //when
      let result = spreadFunc([1, 2, 3]);

      //then
      expect(result).to.be.eql([2, 3, 4]);
    });

  });

});