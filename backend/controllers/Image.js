var utils = require('../utils/writer.js');
const thinkagain = require('thinkagain')();
var r = thinkagain.r;

var Image = require('../service/ImageService');

// GET /image

module.exports.listImages = function listImages(req, res, next) {
  Image.listImages()
    .then(function(result) {
      utils.writeJson(res, result);
    })
    .catch(function(result) {
      utils.writeJson(res, result);
    });
};

// POST /image

module.exports.createImage = function createImage(req, res, next) {
  var title = req.swagger.params['title'].value;
  var description = req.swagger.params['description'].value;
  var upfile = req.swagger.params['upfile'].value;
  Image.createImage(title, description, upfile)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

// GET /image/{id}

module.exports.readImage = function readImage(req, res, next) {
  var id = req.swagger.params['id'].value;
  Image.readImage(id)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};


// PUT /image/{id}

module.exports.updateImage = function updateImage(req, res, next) {
  var id = req.swagger.params['id'].value;
  var image = req.swagger.params['image'].value;
  Image.updateImage(id, image)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

// DELETE /image/{id}

module.exports.deleteImage = function deleteImage(req, res, next) {
  var id = req.swagger.params['id'].value;
  Image.deleteImage(id)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};