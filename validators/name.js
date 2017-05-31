var firstNameKey = 'firstName';
var lastNameKey = 'lastName';

var helpers = require('../helpers');
var stringValidator = require('./string');

function validAbbreviatedName(record1Name, record2Name) {
  if (record1Name == null || record1Name.length == 0 || record2Name == null || record2Name.length == 0)
    return false;

  record1Name = record1Name.replace(/\./gi, '').trim();
  record2Name = record2Name.replace(/\./gi, '').trim();

  if (record1Name.length == 1 || record2Name.length == 1) {
    return record1Name[0] == record2Name[0];
  }

  return false;
}

function verify(record1, record2, results) {
  if (record1 == null || record2 == null)
    return false;

  var record1FirstName = helpers.cleanString(record1.firstName);
  var record2FirstName = helpers.cleanString(record2.firstName);
  var record1LastName = helpers.cleanString(record1.lastName);
  var record2LastName = helpers.cleanString(record2.lastName);

  if (record1FirstName == record2FirstName && validAbbreviatedName(record1LastName, record2LastName)) {
    results.firstName = {score: 1, data: record1FirstName, message: 'exact string match'};
    results.lastName = {score: 1, data: record1LastName, message: 'abbreviated lastName match'};
    return true;
  }
  else if (record1LastName == record2LastName && validAbbreviatedName(record1FirstName, record2FirstName)) {
    results.firstName = {score: 1, data: record1FirstName, message: 'abbreviated firstName match'};
    results.lastName = {score: 1, data: record1LastName, message: 'exact string match'};
    return true;
  }
  else {
    var validFirstName = stringValidator.verify(record1FirstName, record2FirstName, firstNameKey, results);
    var validLastName = stringValidator.verify(record1LastName, record2LastName, lastNameKey, results);
    return validFirstName && validLastName;
  }
}

module.exports = {verify}
