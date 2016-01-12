/*jshint nocomma: true, nonew: true, plusplus: true, strict: true, browser: false, devel: true, node: true*/

var router = require('express').Router();
var auth = require('../auth')('types');

var client = require('redis').createClient(process.env.REDIS_URL);
client.on('error', function (err) {
  'use strict';
  console.log('Error ' + err);
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  'use strict';
  res.json({});
});

router.post('/', function (req, res, next) {
  'use strict';
  if (req.body.type !== undefined) {
    // Sanitize new type
    var newtype = req.body.type;

    if (auth.authorized(req, res, next)) {
      // TODO Record replacement
      client.del('types:' + req.params.type);
      res.json(client.hgetall('types:' + newtype.descriptor));
    }
  } else {
    var err = new Error('Missing payload');
    err.status = 400;
  }
});

router.get('/:type', function (req, res, next) {
  'use strict';
  if (auth.authorized(req, res, next)) {
    if (! client.hgetall('types:' + req.params.type, function (err, obj) {
      res.json(obj);
    })) {
      var err = new Error('Unknown type');
      err.status = 404;
    }
  }
});

router.put('/:type', function (req, res, next) {
  'use strict';
  if (req.body.type !== undefined) {
    // Sanitize new type
    var newtype = req.body.type;

    if (auth.authorized(req, res, next)) {
      client.hmset('types:' + newtype.descriptor, newtype);
      client.del('types:' + req.params.type);
      res.json(client.hgetall('types:' + newtype.descriptor));
    }
  } else {
    var err = new Error('Missing payload');
    err.status = 400;
    next(err);
  }
});

router.delete('/:type', function (req, res, next) {
  'use strict';
  if (auth.authorized(req, res, next)) {
    if (client.del('types:' + req.params.type)) {
      res.status(204).end();
    }
  }
});

router.get('/:type/aircrafts', function (req, res, next) {
  'use strict';
  res.json({});
});

router.get('/:type/flights', function (req, res, next) {
  'use strict';
  res.json({});
});

module.exports = router;
