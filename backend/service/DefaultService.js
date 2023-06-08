'use strict';

var model = require("../model/model.js")

/**
 * Add new gallery
 *
 * title String Gallery title.
 * description String Gallery description. (optional)
 * returns GalleryResponse
 **/
exports.createGallery = function(title, description) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add image to list with upload
 *
 * title String Image title. (optional)
 * description String Image description. (optional)
 * upfile File The file to upload. (optional)
 * returns ImageResponse
 **/
exports.createImage = function(title, description, upfile) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete gallery with selected id.
 *
 * id String 
 * returns OperationStatus
 **/
exports.deleteGallery = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete image with selected id.
 *
 * id String 
 * returns OperationStatus
 **/
exports.deleteImage = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * return selected files
 *
 * folder String 
 * name String 
 * returns String
 **/
exports.fileserve = function(folder, name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * return selected image file
 *
 * name String 
 * returns String
 **/
exports.fileserves = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "bytes": [],
      "empty": true
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * returns String
 **/
exports.homepage = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get list of all galleries.
 *
 * returns GalleryListResponse
 **/
exports.listGalleries = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get list of all images.
 *
 * returns ImageListResponse
 **/
exports.listImages = function() {
  return new Promise(function(resolve, reject) {
    var testData;
    testData = new model.Image({
      id: "0123456789abcd",
      title: "Testowy obrazek",
      description: "Opis do obrazka",
      date: "2017-11-09T10:20:00.214Z",
      path: "/library/images/",
      size: 1024
    });
    if (Object.keys(testData).length > 0) {
      resolve(testData);
    } else {
      resolve();
    }
  });
}


/**
 * Get gallery with selected id
 *
 * id String 
 * returns GalleryResponse
 **/
exports.readGallery = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get image with selected id
 *
 * id String 
 * returns ImageResponse
 **/
exports.readImage = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update gallery with selected id.
 *
 * id String 
 * gallery GalleryUpdate Gallery properties.
 * returns ImageResponse
 **/
exports.updateGallery = function(id, gallery) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update image with selected id.
 *
 * id String 
 * image ImageUpdate Image properties.
 * returns ImageResponse
 **/
exports.updateImage = function(id, image) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}