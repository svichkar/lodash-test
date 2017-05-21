/**
 * Created by svichkar on 5/15/17.
 */

const expect = require("chai").expect;
const _ = require('lodash');

describe('Properties module', function () {

  context('#VERSION property', function () {

    it('Should return semantic version number', function () {

      const version = '4.17.4';
      expect(_.VERSION).to.be.equal(version);
    });
  });

  context('#templateSettings properties', function () {

    it('Should templateSettings properties have default values', function () {

      expect(_.templateSettings.escape.test(/<%-([\s\S]+?)%>/g)).to.be.true;
      expect(_.templateSettings.evaluate.test(/<%([\s\S]+?)%>/g)).to.be.true;
      expect(_.templateSettings.imports).to.be.an('object');
      expect(_.templateSettings.interpolate.test(/<%=([\s\S]+?)%>/g)).to.be.true;
      expect(_.templateSettings.variable).to.be.empty;
    })
  })

});