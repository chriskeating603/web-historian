var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');

// require more modules/folders here!

exports.handleRequest = function (req, res) {
  if (req.method === 'GET'){
    req.statusCode = 200;
    if (req.url === '/'){
      fs.readFile(archive.paths.indexPage, function (err, data){
        var content = data.toString('utf8'); 
        console.log('INDEX PG RES END', res);
        res.end(content);
      });      
    } else {
      var url = archive.paths.archivedSites + req.url;
      if (archive.isUrlArchived(req.url)) {
        fs.readFile(url, function (err, data){
          var content = data.toString('utf8');
          res.end(content);
        });        
      } else {   
        req.statusCode = 404;
        res.writeHead(req.statusCode);
        res.end('404 Not Found');
      } 
    }
  } 
  else if (req.method === 'POST') {
    // console.log('POST REQUEST')
    req.statusCode = 302;
    


    req.addListener('data', (data) => {

      var url = data.toString('utf8').split('=')[1]
      fs.readFile(archive.paths.list, function (err, data){
        var urls = data.toString('utf8').split('\n'); 
        if (!urls.includes(url)){
          fs.appendFile(archive.paths.list, url + '\n', function(){});
          fs.readFile(archive.paths.loadingPage, function (err, data){
            var content = data.toString('utf8'); 
            console.log('RES END', typeof res.end('HEFDFDFDFd'));
            res.end('HEFDFDFDFd');
          });      
        } else {
          // chekc if url is archived
            if (archive.isUrlArchived(url)) {
              var location = archive.paths.archivedSites + '/' + url;
              console.log('location', location)
              console.log('res', res);
              console.log('this', this);
              res.writeHead(302, {Location: 'http://127.0.0.1:8080/' + url})
              res.end();
              // console.log('archive.isUrlArchived(url)', archive.isUrlArchived(url)); 
              // console.log('going in');
              // fs.readFile(archive.paths.archivedSites + '/' + url, function (err, data){
              //   var content = data.toString('utf8');
                
              // });  
            } else {}
            // if it is, show it via ReadFile
            // if it isnt, sshow loading page via readfile
        }    
      }); 

      res.writeHead(req.statusCode)
      res.end();
    });

  }



  //waiting screen - on txt list but not in archives

  //when requested website is in archived - opening ____.com in archives 


};
  