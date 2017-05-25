/**
 * Created by svichkar on 5/15/17.
 */

const expect = require('chai').expect;
const _math = require('lodash/math');

describe('Math module', function () {

  context("#ceil(number, [precision=0])", function () {

    it('Should return the smallest integer greater than or equal to a given number', function () {

      //given
      let number = 25.01;

      //when
      let ceil = _math.ceil(number, -1);

      //then
      expect(ceil).eq(30);
    });
  });

});