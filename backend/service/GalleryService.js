'use strict';

const thinkagain = require('thinkagain')();
var r = thinkagain.r;


exports.listGalleries = function() {

  return r.db("Galleries").table("Gallery").run()

}

exports.createGallery = function(title, description) {
  return r.db('Galleries').table('Gallery').insert({
    title: title,
    description: description
  }).run()
}

exports.deleteGallery = function(id) {
  return r.db("Galleries").table('Gallery').get(id).delete().run()
}

exports.readGallery = function(id) {
  return r.db('Galleries').table('Gallery').get(id).run()
}

exports.updateGallery = function(id, gallery) {
  return r.db('Galleries').table('Gallery').get(id).update(gallery).run()
}