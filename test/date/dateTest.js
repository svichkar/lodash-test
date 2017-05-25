/**
 * Created by svichkar on 5/15/17.
 */

const expect = require('chai').expect;
const _date = require('lodash/date');

describe('Date module', function () {

  context('#now()', function () {

    it('Should return number of milliseconds that have elapsed since the Unix epoch', function () {

      //given

      //when
      let date = _date.now();

      //then
      expect(date).to.be.eq(Date.now());
    });
  });

});