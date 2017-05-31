var assert = require('assert');
var nameValidator = require('../../validators/name');

describe('Name Validator', function() {
  describe('verify()', function() {
  	var record1 = {firstName: 'Melody', lastName: 'Truong'};
    var record2 = {firstName: 'Melody', lastName: 'T.'};
    var record3 = {firstName: 'M.', lastName: 'Truong'};
    var record4 = {firstName: 'Melody', lastName: 'Truong'};
    var record5 = {firstName: 'Mel', lastName: 'Truong'};
    var record6 = {firstName: 'Melody', lastName: 'Smith'};

    it('should return false when first record is null', function() {
      assert.equal(nameValidator.verify(null, record2, {}), false);
    });

    it('should return false when second record is null', function() {
      assert.equal(nameValidator.verify(record1, null, {}), false);
    });

    it('should return true when firstName matches and lastName is abbreviated', function() {
      assert.equal(nameValidator.verify(record1, record2, {}), true);
    });

    it('should return true when firstName is abbreviated and lastName matches', function() {
      assert.equal(nameValidator.verify(record1, record3, {}), true);
    });

    it('should return true when firstName matches and lastName matches', function() {
      assert.equal(nameValidator.verify(record1, record4, {}), true);
    });

    it('should return false when firstName does not match', function() {
      assert.equal(nameValidator.verify(record1, record5, {}), false);
    });

    it('should return false when lastName does not match', function() {
      assert.equal(nameValidator.verify(record1, record6, {}), false);
    });
  });
});
