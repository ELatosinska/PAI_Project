'use strict';

const thinkagain = require('thinkagain')();
var r = thinkagain.r;


exports.listImages = function() {

  return r.db("Galleries").table("Image").run()

}

exports.createImage = function(title, description, upfile) {

}

exports.deleteImage = function(id) {
  return r.db("Galleries").table('Image').get(id).delete().run()
}

exports.readImage = function(id) {
  return r.db('Galleries').table('Image').get(id).run()
}

exports.updateImage = function(id, gallery) {
  return r.db('Galleries').table('Image').get(id).update(image).run()
}