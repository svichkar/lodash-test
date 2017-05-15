/**
 * Created by svichkar on 5/15/17.
 */

const assert = require('chai').assert;
const app = require('../app');

describe('App', () => {
  it('should return hello', () => {
    assert.equal(app(), 'hello');
  })
});