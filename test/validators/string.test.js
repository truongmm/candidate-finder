var assert = require('assert');
var stringValidator = require('../../validators/string');

describe('String Validator', function() {
  describe('verify()', function() {
  	var string1 = 'string1';
  	var string2 = 'string2'; 

    it('should return false when first string is null', function() {
      assert.equal(stringValidator.verify(null, string2, 'key', {}), false);
    });

    it('should return false when second string is null', function() {
      assert.equal(stringValidator.verify(string1, null, 'key', {}), false);
    });

    it('should return false when first string is empty', function() {
      assert.equal(stringValidator.verify('', string2, 'key', {}), false);
    });


    it('should return false when second string is empty', function() {
      assert.equal(stringValidator.verify(string1, '', 'key', {}), false);
    });

    it('should return false when strings do not match', function() {
      assert.equal(stringValidator.verify(string1, string2, 'key', {}), false);
    });

    it('should return true when strings match', function() {
      assert.equal(stringValidator.verify(string1, string1, 'key', {}), true);
    });
  });
});
