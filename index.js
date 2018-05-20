'use strict';

let port = process.env.PORT || process.env.port || 8080,
	queryString = require('querystring'),
	eventEmitter = require('events'),
	simpl3s = require('simpl3s'),
	url = require('url'),
	ready = false,
	config;


// Global event emitter
global.EVENTS = new eventEmitter.EventEmitter();
EVENTS.setMaxListeners(9999);


// Toggle application ready to receive requests
EVENTS.on('appReady', () => {
	ready = true;
});


// Simpl3s config
config = {
	gzip: false,
	port: port,
	path: './www'
};


// Start the app
require('./chewie-cam.js');
simpl3s.server(config);
