/*jshint nocomma: true, nonew: true, plusplus: true, strict: true, browser: true, devel: true, node: true*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
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

router.post('/', function(req, res, next) {
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

router.get('/:type', function(req, res, next) {
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

router.put('/:type', function(req, res, next) {
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

router.delete('/:type', function(req, res, next) {
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

router.get('/:type/aircrafts', function(req, res, next) {
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

router.get('/:type/flights', function(req, res, next) {
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
