var assert = require('assert');
var helpers = require('../helpers');

describe('Helpers', function() {
  describe('calculateScore()', function() {
    var resultsForDifferentCandidate = {
      firstName: {score: 0},
      lastName: {score: 0},
      location: {score: 1},
      linkedIn: {score: 0},
      twitter: {score: 0}
    };
    var resultsForMatchingCandidate = {
      firstName: {score: 1},
      lastName: {score: 1},
      location: {score: 0},
      linkedIn: {score: 1},
      twitter: {score: 1}
    };

    it('should return 0 if results are null', function() {
      assert.equal(helpers.calculateScore(null), 0);
    });

    it('should return 0 if results are empty', function() {
      assert.equal(helpers.calculateScore({}), 0);
    });

    it('should return a low score for a different candidate', function() {
      assert.equal(helpers.calculateScore(resultsForDifferentCandidate), 3);
    });

    it('should return a high score for matching candidate', function() {
      assert.equal(helpers.calculateScore(resultsForMatchingCandidate), 97);
    });
  });

  describe('cleanString()', function() {
    it('should return undefined if string is null', function() {
      assert.equal(helpers.cleanString(null), undefined);
    });

    it('should return undefined if string is empty', function() {
      assert.equal(helpers.cleanString(''), undefined);
    });

    it('should return original string if string is clean', function() {
      assert.equal(helpers.cleanString('abc'), 'abc');
    });

    it('should remove trailing spaces', function() {
      assert.equal(helpers.cleanString('   abc   '), 'abc');
    });

    it('should remove unicode characters', function() {
      assert.equal(helpers.cleanString('abc '), 'abc');
    });
  });

  describe('getFormattedResults()', function() {
    var candidateId = 10;
    var score = 97;
    var results = {
      firstName: {score: 1, data: 'Melody', message: 'exact string match'},
      lastName: {score: 1, data: 'T', message: 'abbreviated lastName match'},
      location: {score: 0, data: 'San Jose', message: 'no match'},
      linkedIn: {score: 1, data: 'www.linkedin.com/in/truongmm/', message: 'url match'},
      twitter: {score: 1, data: 'truongmm', message: 'exact string match'}
    };

    it('should return undefined if candidateId is null', function() {
      assert.equal(helpers.getFormattedResults(null, score, results), undefined);
    });

    it('should return undefined if score is 0', function() {
      assert.equal(helpers.getFormattedResults(candidateId, 0, results), undefined);
    });

    it('should return undefined if results is empty', function() {
      assert.equal(helpers.getFormattedResults(candidateId, score, {}), undefined);
    });

    it('should return correct message if results are provided', function() {
      var expectedResults = 'Candidate record 10 is a potential match! It has a 97% similarity rate!\n' +
        '\nfirstName: Melody (exact string match)' +
        '\nlastName: T (abbreviated lastName match)' +
        '\nlocation: San Jose (no match)' +
        '\nlinkedIn: www.linkedin.com/in/truongmm/ (url match)' +
        '\ntwitter: truongmm (exact string match)';
      assert.equal(helpers.getFormattedResults(candidateId, score, results), expectedResults);
    });
  });
});
