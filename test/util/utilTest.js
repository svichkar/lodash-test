/**
 * Created by svichkar on 5/15/17.
 */

const _util = require('lodash/util');
const chain = require('lodash/chain');
const map = require('lodash/map');
const flatten = require('lodash/flatten');
const value = require('lodash/value');
let _ = require('lodash/wrapperLodash')

describe('Util module', function () {

  it('should return hello', function () {

    _util.mixin(_, {
      map: map,
      chain: chain,
      value: value,
      flatten: flatten
    }, false);

    let a = _.chain([1, 2, 3])
      .map(x => [x, x*2])
      .flatten()
      .value();
    console.log(a);
  });

});