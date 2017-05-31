var key = 'location';

var helpers = require('../helpers');
var stringValidator = require('./string');

function verify(record1, record2, results) {
  if (record1 == null || record2 == null)
    return false;

  var record1Value = helpers.cleanString(record1[key]);
  var record2Value = helpers.cleanString(record2[key]);
  return stringValidator.verify(record1Value, record2Value, key, results);
}

module.exports = {verify}
