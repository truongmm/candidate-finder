var helpers = require("../helpers");

function verify(record1String, record2String, key, results) {
  if (record1String == null || record1String.length == 0 || record2String == null || record2String.length == 0)
    return false;

  if (record1String == record2String) {
    results[key] = {score: 1, data: record1String, message: 'exact string match'};
    return true;
  }
  else if (record1String != null && record2String != null) {
    results[key] = {score: 0, data: record1String, message: 'no match'};
    return false
  }
}

module.exports = {verify}
