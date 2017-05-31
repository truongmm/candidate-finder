/* Database */
var dbCandidates = require('./data/candidates.json').candidates;

/* Helpers */
var helpers = require('./helpers');

/* Validators */
var locationValidator = require('./validators/location');
var nameValidator = require('./validators/name');
var profileValidator = require('./validators/profile');

var minScoreThreshold = 75;

function searchForCandidate(candidates, newCandidate) {
  for (var i=0; i<candidates.length; i++) {
    var results = {};
    var candidate = candidates[i];

    nameValidator.verify(candidate, newCandidate, results);
    locationValidator.verify(candidate, newCandidate, results);
    profileValidator.verify(candidate, newCandidate, results);

    var score = helpers.calculateScore(results);
    if (score >= minScoreThreshold) {
      console.log(helpers.getFormattedResults(i, score, results));
    }
  }
}

var newCandidate = require('./data/sampleCandidate.json');
searchForCandidate(dbCandidates, newCandidate);
