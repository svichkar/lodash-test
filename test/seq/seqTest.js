/**
 * Created by svichkar on 5/15/17.
 */

const expect = require('chai').expect;
const _ = require('lodash');

describe('Seq module', function () {

  context('#chain(value)', function () {

    it('Should invoke interceptor and return value', function () {

      //given
      let users = [
        {'user': 'barney', 'age': 36},
        {'user': 'fred', 'age': 40},
        {'user': 'pebbles', 'age': 1}
      ];

      //when
      let youngest = _
        .chain(users)
        .sortBy('age')
        .map(function (object) {
          return object.user + ' is ' + object.age;
        })
        .head()
        .value();

      //then
      expect(youngest).eq('pebbles is 1');
    });
  });

  context('#tap(value, interceptor)', function () {

    it('Should invoke interceptor and return value', function () {

      //given
      let array = [1, 2, 3];

      //when
      _.tap(_(array), function (array) {
        array.pop();
      })
        .reverse()
        .value();

      //then
      expect(array).eql([2, 1]);
    });
  });

  context('#thru(value, interceptor)', function () {

    it('Should invoke interceptor and return the result of interceptor', function () {

      //given
      let array = ['a', 'b', 'c', 'd'];

      //when
      let result = _(array).thru(function (array) {
        return array.slice(0, 3);
      })
        .filter(v => v !== 'a')
        .value();

      //then
      expect(result).eql(['b', 'c']);
    });
  });

});