/*jshint nocomma: true, nonew: true, plusplus: true, strict: true, browser: true, devel: true, node: true*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', { title: 'Express' });
});

module.exports = router;
