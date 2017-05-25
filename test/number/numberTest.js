/**
 * Created by svichkar on 5/15/17.
 */

const expect = require('chai').expect;
const _number = require('lodash/number');

describe('Number module', function () {

  context("#inRange(number, [start=0], end)", function () {

    it('Should check if n is between start and up to, but not including, end', function () {

      //given
      let number = 25;

      //when
      let isInRange = _number.inRange(number, -5, 25);

      //then
      expect(isInRange).false;
    });
  });

  context("#clamp(number, [lower], upper)", function () {

    it('Should clamp number within the inclusive lower and upper bounds', function () {

      //given
      let number = 25;

      //when
      let clamped = _number.clamp(number, -5, 5);

      //then
      expect(clamped).eq(5);
    });
  });

});