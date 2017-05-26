/**
 * Created by svichkar on 5/15/17.
 */

const expect = require("chai").expect;
const _util = require('lodash/util');
const chain = require('lodash/chain');
const map = require('lodash/map');
const flatten = require('lodash/flatten');
const value = require('lodash/value');
const thru = require('lodash/thru');
let _ = require('lodash/wrapperLodash')

describe('Util module', function () {

  context('#attempt(func, [args])', function () {

    it('Attempts to invoke func, returning either the result or the caught error object', function () {

      //given
      function throwError() {
        throw Error("Error message here");
      }

      //when
      let result = _util.attempt(throwError);

      //then
      expect(result).a.instanceOf(Error);
    });
  });

  context('#flow([funcs])', function () {

    it('Should create a function that returns the result of invoking the given functions', function () {

      //given
      function sum(a, b) {
        return a + b;
      }

      function square(v) {
        return v * v;
      }

      let evaluate = _util.flow(sum, square);

      //when
      let result = evaluate(2, 3);

      //then
      expect(result).eq(25);
    });
  });

});