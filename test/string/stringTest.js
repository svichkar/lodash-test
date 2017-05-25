/**
 * Created by svichkar on 5/15/17.
 */

const expect = require("chai").expect;
const _string = require('lodash/string');

describe('String module', function () {

  context("#camelCase([string=''])", function () {

    it('', function () {

      //given
      let string = '__FOO_BAR__2';

      //when
      let camelCaseString = _string.camelCase(string);

      //then
      expect(camelCaseString).eq('fooBar2');
    });
  });

  context("#padEnd([string=''], [length=0], [chars=' '])", function () {

    it("Should pad string on the right side if it's shorter than length", function () {

      //given
      let string = 'hello';

      //when
      let padEndString = _string.padEnd(string, 11, ' world');

      //then
      expect(padEndString).eq('hello world');
    });
  });

  context("#words([string=''], [pattern])", function () {

    it('Should splits string into an array of its words', function () {

      //given
      let string = 'hello    world';

      //when
      let splitString = _string.split(string, /\s+/g);

      //then
      expect(splitString).to.have.members(['hello', 'world']);
    });
  });

});