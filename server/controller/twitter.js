var OAuth = require('oauth');

var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'B9LhQsGqJ8JDdew9REjBVtD3B',
      'Ul7zX7ZfEtBClCsV3jAtuTeTc5Bxd2jOtl6ADVHrJBx9m5rtqc',
      '1.0A',
      null,
      'HMAC-SHA1'
);


module.exports = {timeline,search,newTweet};
