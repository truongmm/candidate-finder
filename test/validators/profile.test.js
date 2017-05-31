var assert = require('assert');
var profileValidator = require('../../validators/profile');

describe('Profile Validator', function() {
  describe('verify()', function() {
  	var record1 = {profiles: {linkedIn: {url: 'https://www.linkedin.com/in/truongmm/'}}};
    var record2 = {profiles: {linkedIn: {url: 'www.linkedin.com/in/truongmm/'}}};
    var record3 = {profiles: {linkedIn: {userId: 'truongmm'}}};
    var record4 = {profiles: {linkedIn: {userId: 'truongmm'}}};
    var record5 = {profiles: {linkedIn: {url: 'https://www.linkedin.com/in/johndoe/'}}};
    var record6 = {profiles: {linkedIn: {userId: 'johndoe'}}};

    it('should return false when first record is null', function() {
      assert.equal(profileValidator.verify(null, record2, {}), false);
    });

    it('should return false when second record is null', function() {
      assert.equal(profileValidator.verify(record1, null, {}), false);
    });

    it('should return false when first record has no profiles', function() {
      assert.equal(profileValidator.verify({profiles: null}, record2, {}), false);
    });

    it('should return false when second record has no profiles', function() {
      assert.equal(profileValidator.verify(record1, {profiles: null}, {}), false);
    });

    it('should return true when profile urls match', function() {
      assert.equal(profileValidator.verify(record1, record2, {}), true);
    });

    it('should return true when profile userIds match', function() {
      assert.equal(profileValidator.verify(record3, record4, {}), true);
    });

    it('should return false when profile urls do not match', function() {
      assert.equal(profileValidator.verify(record1, record5, {}), false);
    });

    it('should return false when profile userIds do not match', function() {
      assert.equal(profileValidator.verify(record3, record6, {}), false);
    });
  });
});
