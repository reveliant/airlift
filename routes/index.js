/*jshint nocomma: true, nonew: true, plusplus: true, strict: true, browser: false, devel: true, node: true*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  'use strict';
  res.redirect('https://airlift.oxiame.com');
  res.send('See main site on https://airlift.oxiame.com');
});

module.exports = router;
