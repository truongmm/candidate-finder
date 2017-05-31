var parseUrl = require('parse-url');

function verify(record1Url, record2Url) {
  if (record1Url == null || record1Url.length == 0 || record2Url == null || record2Url.length == 0)
    return false;

  var record1ParsedUrl = parseUrl(record1Url);
  var record2ParsedUrl = parseUrl(record2Url);

  return record1ParsedUrl.resource == record2ParsedUrl.resource && record1ParsedUrl.pathname == record2ParsedUrl.pathname;
}

module.exports = {verify}
