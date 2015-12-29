#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('./app');
var http = require('http');

/**
 * Set listening from loopback adresses only
 */
var address = ['127.0.0.1', '::1'];
app.set('trust proxy', 'loopback');

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '28524');
app.set('port', port);

/**
 * Create HTTP server on provided port, on loopback interfaces.
 */
for(var addr in address) {
    if (address[addr] !== undefined) {
        (new HttpServer(app)).listen(port, address[addr]);
    }
}

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

function HttpServer (app) {
    'use strict';

    var my = this,  // Public scope
        priv = {    // Private scope
            app: app,
            address: '0.0.0.0',
            port: 3000
        };

    /**
     * Event listener for HTTP server "error" event.
     */
    this.onError = function(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }

        var bind = (typeof priv.port === 'string') ? ('Pipe ' + priv.port) : ('Port ' + priv.port);

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    };

    /**
     * Event listener for HTTP server "listening" event.
     */
    this.onListening = function() {
        var addr = priv.server.address();
        var bind = (typeof addr === 'string') ? ('pipe ' + addr) : ('port ' + addr.port);
        console.log('Listening on ' + addr.address + ', ' + bind);
    };

    this.listen = function(port, address) {
        priv.address = address || priv.address;
        priv.port = port || priv.port;
        priv.server = http.createServer(priv.app).listen(priv.port, priv.address).on('error', my.onError).on('listening', my.onListening);
    };
}