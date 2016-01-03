/*jshint nocomma: true, nonew: true, plusplus: true, strict: true, browser: false, devel: true, node: true*/

var router = require('express').Router();
var auth = require('../auth')('aircrafts');

router.get('/', function (req, res, next) {
  'use strict';
  res.json({});
});

router.post('/', function (req, res, next) {
  'use strict';
  res.json({});
});

router.get('/:aircraft', function (req, res, next) {
  'use strict';
  res.json({});
});

router.put('/:aircraft', function (req, res, next) {
  'use strict';
  res.json({});
});

router.delete('/:aircraft', function (req, res, next) {
  'use strict';
  res.json({});
});

router.get('/:aircraft/flights', function (req, res, next) {
  'use strict';
  res.json({});
});

module.exports = router;
