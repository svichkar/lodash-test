/**
 * Created by svichkar on 5/15/17.
 */

const expect = require('chai').expect;
const _lang = require('lodash/lang');

describe('Lang module', function () {

  context('#isNil(value)', function () {

    it('Should check if value is null or undefined', function () {

      //given

      //when
      let isTrue = _lang.isNil(null) && _lang.isNil(void 0);
      let isFalse = _lang.isNil(NaN);

      //then
      expect(isTrue).true;
      expect(isFalse).false;
    });

  });

  context('#toPlainObject(value)', function () {

    it('Should converts value to a plain object ' +
      'flattening inherited enumerable string keyed properties of value to own properties', function () {

      //given
      function Foo() {
        this.b = 3;
      }
      Foo.prototype.a = 2;
      Foo.prototype.c = 4;

      //when
      let result = _lang.toPlainObject(new Foo);

      //then
      expect(result).eql({'a' : 2, 'b' : 3, 'c' : 4});
    });

  });

});