/**
 * Created by svichkar on 5/15/17.
 */

const _util = require('lodash/util');

const chain = require('lodash/chain');
const map = require('lodash/map');
const filter = require('lodash/filter');
const value = require('lodash/value');
const _ = require('lodash/wrapperLodash');

describe('Util module', function () {

  _util.mixin(_, {
    map: map,
    chain: chain,
    filter: filter,
    value: value
  });

  it('should return hello', function () {
    var a = _.chain([4, 15, 20, 7, 3, 13, 20])
      .map(() => toLowerCase)
      .filter(s => s < 10)
      .value();
    console.log(a);
  });

});