/*jshint nocomma: true, nonew: true, plusplus: true, strict: true, browser: true, devel: true, node: true*/

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var app = express();

app.use(logger('dev'));
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/flights', require('./routes/flight'));
app.use('/aircrafts', require('./routes/aircrafts'));
app.use('/types', require('./routes/types'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    'use strict';
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        'use strict';
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        }).type('json');
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    'use strict';
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    }).type('json');
});


module.exports = app;
