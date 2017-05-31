var helpers = require('../helpers');
var stringValidator = require('./string');
var urlValidator = require('./url');

var validProfileIds = [
  'linkedIn',
  'github',
  'twitter',
  'gravatar',
  'facebook',
  'klout',
  'angellist',
  'google',
  'foursquare',
  'pinterest',
  'aboutMe',
  'flickr',
  'vimeo',
  'googlePlus',
  'quora'
]
var validProfileKeys = [
  'url',
  'avatarUrl',
  'userId'
];

function verify(record1, record2, results) {
  if (record1 == null || record1.profiles == null || record2 == null || record2.profiles == null)
    return false;

  var hasValidProfile = false;

  for (var i=0; i<validProfileIds.length; i++) {
    var profileId = validProfileIds[i];
    var record1Profile = record1.profiles[profileId];
    var record2Profile = record2.profiles[profileId];

    if (record1Profile == null || record2Profile == null)
      continue;

    for (var j=0; j<validProfileKeys.length; j++) {
      var profileKey = validProfileKeys[j];
      var record1Value = helpers.cleanString(record1Profile[profileKey]);
      var record2Value = helpers.cleanString(record2Profile[profileKey]);

      if (results[profileId] == null) {
        if (profileKey == 'url' && urlValidator.verify(record1Value, record2Value)) {
          results[profileId] = {score: 1, data: record1Value, message: 'url match'};
          hasValidProfile = true;
        }
        else
          if (stringValidator.verify(record1Value, record2Value, profileId, results))
            hasValidProfile = true;
      }
    }
  }

  return hasValidProfile;
}

module.exports = {verify}
