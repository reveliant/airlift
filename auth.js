/*jshint nocomma: true, nonew: true, plusplus: true, strict: true, browser: false, devel: true, node: true*/

var client = require('redis').createClient(process.env.REDIS_URL);
client.on('error', function (err) {
  'use strict';
  console.log('Error ' + err);
});

function Auth(component) {
  'use strict';
  var properties = {};
  properties.component = component;
}

Auth.prototype.authorized = function (req, res, next) {
  'use strict';
  var authorized = false;

  // Check things

  authorized = true;

  if (! authorized) {
    var err = new Error('You are not allowed to perform this operation');
    err.status = 403;
    next(err);
  }

  return authorized;

};

module.exports = Auth;
