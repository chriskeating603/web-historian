var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {

  if (req.method === 'GET'){
    console.log('went in')
    req.statusCode = 200;
    req.writeHead(statusCode, )
  }

  res.end('/<input/');
};
  