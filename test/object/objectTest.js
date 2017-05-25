/**
 * Created by svichkar on 5/15/17.
 */

const expect = require("chai").expect;
const _object = require('lodash/object');

describe('Object module', function () {

  context('#assignInWith(object, sources, [customizer])', function () {

    it('Should modify values before assigning', function () {

      //given
      function Source() {
        this.a = 1;
      }

      Source.prototype.b = 2;
      let object = {'a': 5};

      //when
      let result = _object.assignInWith(object, new Source);

      //then
      expect(result).to.have.property('a').that.to.be.eq(1);
      expect(result).to.have.property('b').that.to.be.eq(2);
    });

  });

  context('#at(object, [paths])', function () {

    it('Creates an array of values corresponding to paths of object', function () {

      //given
      let object = {'a': [{'b': {'c': 3}}, 4]};

      //when
      let c = _object.at(object, ['a[0].b.c']);

      //then
      expect(c).to.have.lengthOf(1);
      expect(c).to.have.members([3]);
    });

  });

  context('#defaults(object, [sources])', function () {

    it('Should populate undefined properties of object with default values', function () {

      //given
      let object = {'a': [{'b': {'c': 3}}, 4]};

      //when
      _object.defaults(object, {'d': 25}, {'a': 1, 'd': 17});

      //then
      expect(object.d).to.be.eq(25);
    });

  });

  context('#toPairsIn(object)', function () {

    it('Should creates an array of own and inherited keyed-value pairs', function () {

      //given
      function SourceObject() {
        this.a = 1;
        this.b = 2;
      }
      SourceObject.prototype.c = 3;

      //when
      let array = _object.toPairsIn(new SourceObject);

      //then
      expect(array).to.be.eql([['a', 1], ['b', 2], ['c', 3]]);
    });

  });

  context('#get(object, path, [defaultValue])', function () {

    it('Should return the value at path of object or default value', function () {

      //given
      function SourceObject() {
        this.a = 1;
        this.b = 2;
      }
      SourceObject.prototype.c = 3;

      //when
      let c = _object.get(new SourceObject, 'c', 0);
      let d = _object.get(new SourceObject, 'd', 0);

      //then
      expect(c).to.be.eq(3);
      expect(d).to.be.eq(0);
    });

  });

  context('#hasIn(object, path)', function () {

    it('Should check if path is a direct or inherited property of object', function () {

      //given
      function SourceObject() {
        this.a = 1;
        this.b = 2;
      }
      SourceObject.prototype.c = {'a' : 5};

      //when
      let direct = _object.hasIn(new SourceObject, 'a');
      let inherited = _object.hasIn(new SourceObject, 'c.a');

      //then
      expect(direct).true;
      expect(inherited).true;
    });

  });

  context('#invoke(object, path, [args])', function () {

    it('Should invoke the method at path of object', function () {

      //given
      function SourceObject() {
        this.a = 1;
        this.b = 2;
      }
      SourceObject.prototype.c = [5, 6, 7, 8, 9];

      //when
      let result = _object.invoke(new SourceObject, 'c.join', '-');

      //then
      expect(result).eq('5-6-7-8-9');
    });

  });

  context('#set(object, path, value)', function () {

    it('Should set the value at path of object', function () {

      //given
      let object = {};

      //when
      _object.set(object, 'a[0].b.c', 5);

      //then
      expect(object.a[0].b.c).eq(5);
    });

  });

});