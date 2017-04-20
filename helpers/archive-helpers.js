var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

var readFile = (cb) => {
  fs.readFile(exports.paths.list, function (err, data){
    if (err) {throw err;}
    var urls = data.toString('utf8').split('\n'); 
    cb(urls);
  });
};

exports.readListOfUrls = function(callback) {
  readFile(callback);
};

exports.isUrlInList = function(url, callback) {
  fs.readFile(exports.paths.list, function (err, data){
    if (err) {throw err;}
    var urls = data.toString('utf8').split('\n'); 
    var exists = urls.includes(url);
    callback(exists);
  }); 
};

exports.addUrlToList = function(url, callback) {
  fs.readFile(exports.paths.list, function (err, data){
    if (err) {throw err;}

    var urls = data.toString('utf8').split('\n'); 

    if (!urls.includes(url)){
      //append URL to txt file
      fs.appendFile(exports.paths.list, url, function(){});
      //adds to /site directory
      // fs.writeFile(exports.paths.archivedSites + '/' + url, 'HI');
    }    

    callback();
  }); 

};

exports.isUrlArchived = function(url, callback) {
  callback = callback || function (exists){return exists};
  var urlTesting = path.join(exports.paths.archivedSites, '/', url);
  var exists = fs.existsSync(urlTesting);
  callback(exists);      
};

exports.downloadUrls = function(urls) {
  //FOR EACH in urls
  urls.forEach((url) => {
    if (!exports.isUrlArchived(url)) {
      fs.writeFile(exports.paths.archivedSites + '/' + url, 'HI');
    }
  })
    // checkk if archived
      // if not archived, download it (writeFile)
};