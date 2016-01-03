/*jshint nocomma: true, nonew: true, plusplus: true, strict: true, browser: false, devel: true, node: true*/

var router = require('express').Router();
var auth = require('../auth')('flights');

router.get('/', function (req, res, next) {
  'use strict';
  res.json({});
});

router.post('/', function (req, res, next) {
  'use strict';
  res.json({});
});

router.get('/:flight', function (req, res, next) {
  'use strict';
  res.json({});
});

router.put('/:flight', function (req, res, next) {
  'use strict';
  res.json({});
});

router.delete('/:flight', function (req, res, next) {
  'use strict';
  res.json({});
});

module.exports = router;
