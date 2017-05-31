var _ = require('underscore');
var weights = require('./config/weights.json').weights;

var minScoreThreshold = 75;

function calculateScore(results) {
  var keys = _.keys(results);
  if (keys.length == 0)
    return 0;

  var score = 0;
  var totalScore = 0;

  _.each(keys, function(key){
    result = results[key];
    weight = weights[key];
    totalScore += weight;
    score += (weight * result.score);
  });

  return Math.round(score / totalScore * 100);
}

function cleanString(str) {
  if (str == null || str.length == 0)
    return;
  return str.replace(/[\uE000-\uF8FF]/g, '').trim();
}

function getFormattedResults(candidateId, score, results) {
  var keys = _.keys(results);
  if (candidateId == null || score == 0 || keys.length == 0)
    return;

  var printResults = '\nCandidate record ' + candidateId + ' is a potential match! It has a ' + score + '% similarity rate!\n\n';
  _.each(keys, function(key){
    var result = results[key];
    printResults += key + ': ' + result.data + ' (' + result.message + ')\n';
  })
  return printResults;
}

module.exports = {calculateScore, cleanString, getFormattedResults}
