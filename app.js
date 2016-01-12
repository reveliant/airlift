/*jshint nocomma: true, nonew: true, plusplus: true, strict: true, browser: false, devel: true, node: true*/

var express = require('express');
var helmet = require('helmet');
var morgan = require('morgan');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  'use strict';
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    'use strict';
    var code = err.status || 500;
    res.status(code);
    res.json({
      code: code,
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  'use strict';
  var code = err.status || 500;
  res.status(code);
  res.json({
    code: code,
    message: err.message,
    error: {}
  });
});

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/flights', require('./routes/flights'));
app.use('/aircrafts', require('./routes/aircrafts'));
app.use('/types', require('./routes/types'));

module.exports = app;
