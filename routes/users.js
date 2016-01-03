/*jshint nocomma: true, nonew: true, plusplus: true, strict: true, browser: false, devel: true, node: true*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  'use strict';
  res.json({
    body: req.body,
    cookies: req.cookies,
    ip: req.ip,
    params: req.params,
    query: req.query,
    route: req.route,
    client: {
      user: req.get('X-Airlift-User'),
      token: req.get('X-Airlift-Token')
    },
    xhr: req.xhr
  });
});

router.get('/:name', function (req, res, next) {
  'use strict';
  res.json({
    body: req.body,
    cookies: req.cookies,
    ip: req.ip,
    params: req.params,
    query: req.query,
    route: req.route,
    client: {
      user: req.get('X-Airlift-User'),
      token: req.get('X-Airlift-Token')
    },
    user: req.params.name,
    xhr: req.xhr
  });
});

module.exports = router;
