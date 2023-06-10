var utils = require('../utils/writer.js');

var Gallery = require('../service/GalleryService');


// GET /gallery

module.exports.listGalleries = function listGalleries(req, res, next) {
  Gallery.listGalleries()
    .then(function(result) {
      console.log(result.params)
      utils.writeJson(res, result);
    })
    .catch(function(result) {
      utils.writeJson(res, result);
    });
};

// POST /gallery

module.exports.createGallery = function createGallery(req, res, next) {
  var title = req.swagger.params['title'].value;
  var description = req.swagger.params['description'].value;
  Gallery.createGallery(title, description)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

// GET /gallery/{id}

module.exports.readGallery = function readImage(req, res, next) {
  var id = req.swagger.params['id'].value;
  Gallery.readGallery(id)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};


// PUT /gallery/{id}

module.exports.updateGallery = function updateImage(req, res, next) {
  var id = req.swagger.params['id'].value;
  var image = req.swagger.params['gallery'].value;
  Gallery.updateGallery(id, image)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

// DELETE /gallery/{id}

module.exports.deleteGallery = function deleteImage(req, res, next) {
  var id = req.swagger.params['id'].value;
  Gallery.deleteGallery(id)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};