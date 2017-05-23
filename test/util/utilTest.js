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
    var a = _([4, 15, 20, 7, 3, 13, 20]).chain()
      .map(() => toLowerCase)
      .filter(s => s !== 'o')
      .value();
    console.log(a);
  });

  var array = [4, 15, 20, 7, 3, 13, 20];
  array;

  _([4, 15, 20, 7, 3, 13, 20]).filter(x => x < 10).take(3);

  _([4, 15, 20, 7, 3, 13, 20]).chain()
    .map((v) => {console.log("map"); return v;})
    .filter((v) => {console.log("filter"); return v < 10;})
    .take(3)
    .value();
});