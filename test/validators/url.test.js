var assert = require('assert');
var urlVaidator = require('../../validators/url');

describe('Url Validator', function() {
  describe('verify()', function() {
  	var url1 = 'www.groupon.com/goods';
  	var url2 = 'https://www.groupon.com/goods';
    var url3 = 'https://www.groupon.com/goods?category=all';
    var url4 = 'www.groupon.com';
    var url5 = 'www.google.com';
    var url6 = 'www.groupon.com/goods';

    it('should return false when first url is null', function() {
      assert.equal(urlVaidator.verify(null, url2), false);
    });

    it('should return false when second url is null', function() {
      assert.equal(urlVaidator.verify(url1, null), false);
    });

    it('should return false when first url is empty', function() {
      assert.equal(urlVaidator.verify('', url2), false);
    });

    it('should return false when second url is empty', function() {
      assert.equal(urlVaidator.verify(url1, ''), false);
    });

    it('should return true with https protocol', function() {
      assert.equal(urlVaidator.verify(url1, url2), true);
    });

    it('should return true with query', function() {
      assert.equal(urlVaidator.verify(url1, url3), true);
    });

    it('should return false when urls do not have same pathname', function() {
      assert.equal(urlVaidator.verify(url1, url4), false);
    });

    it('should return false when urls do not have same hostname', function() {
      assert.equal(urlVaidator.verify(url1, url5), false);
    });

    it('should return true when hostname and pathname are the same', function() {
      assert.equal(urlVaidator.verify(url1, url6), true);
    });
  });
});
