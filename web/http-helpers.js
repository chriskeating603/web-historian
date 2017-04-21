var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
};



// As you progress, keep thinking about what helper functions you can put here!

//helper function to set status code 
exports.sendResponse = function (request, callback) {}

//helper function to collect data
exports.collectData = function (request, callback) {}

//helper function to send 404 status code 
exports.send404 = function (response) {}

//redirect to pages in POST request
exports.sendRedirect = function (response, location, status) {}
