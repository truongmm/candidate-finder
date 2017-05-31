var assert = require('assert');
var locationValidator = require('../../validators/location');

describe('Location Validator', function() {
  describe('verify()', function() {
  	var record1 = {location: 'san jose'};
  	var record2 = {location: 'san franciso'}; 

    it('should return false when first record is null', function() {
      assert.equal(locationValidator.verify(null, record2, {}), false);
    });

    it('should return false when second record is null', function() {
      assert.equal(locationValidator.verify(record1, null, {}), false);
    });

    it('should return false when locations do not match', function() {
      assert.equal(locationValidator.verify(record1, record2, {}), false);
    });

    it('should return true when locations match', function() {
      assert.equal(locationValidator.verify(record1, record1, {}), true);
    });
  });
});
