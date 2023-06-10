'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');
const thinkagain = require('thinkagain')();
var r = thinkagain.r;
var formidable = require('formidable')

module.exports.fileserve = function fileserve(req, res, next) {
  var folder = req.swagger.params['folder'].value;
  var name = req.swagger.params['name'].value;
  Default.fileserve(folder, name)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.fileserves = function fileserves(req, res, next) {
  var name = req.swagger.params['name'].value;
  Default.fileserves(name)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.homepage = function homepage(req, res, next) {
  Default.homepage()
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.upload = function upload(req, res, next) {
  let form = new formidable.IncomingForm()
  form.parse(req, function(err, fields, files) {
    let orginalpath = files.filetoupload.path
    let targetpath = '../images/' + files.filetoupload.name
    fs.rename(orginalpath, targetpath, function(err) {
      if (err) throw err
      res.end()
    })
  })
}