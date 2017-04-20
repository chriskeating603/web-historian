var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {

  if (req.method === 'GET'){
    req.statusCode = 200;
    
    if (req.url === '/'){
      //input screen - first open server 
      fs.readFile(archive.paths.indexPage, function (err, data){
        // if (err) {throw err;}
        var content = data.toString('utf8'); 
        res.end(content);
      });
    } else {
      var url = archive.paths.archivedSites + req.url;
      fs.readFile(url, function (err, data){
        // if (err) {throw err;}
        var content = data.toString('utf8'); 
        res.end(content);
      });      
    }

  } else if (req.method === 'POST') {

  }



  //waiting screen - on txt list but not in archives

  //when requested website is in archived - opening ____.com in archives 


};
  