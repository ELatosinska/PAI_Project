const thinkagain = require('thinkagain')();

//Image

var Image = thinkagain.createModel('Image', {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    description: { type: 'string' },
    date: { type: 'string', format: 'date-time' },
    path: { type: 'string' },
    size: { type: 'integer' }
  },
  required: ['title', 'path']
});

// Gallery

var Gallery = thinkagain.createModel('Gallery', {
  type: 'object',
  properties: {
    idGallery: { type: 'string' },
    title: { type: 'string' },
    description: { type: 'string' },
    date: { type: 'string', format: 'date-time' },
    visibility: { type: 'string' }
  },
  required: ['title']
})

Image.belongsTo(Gallery, 'gallery', 'idGallery', 'id');

exports.Image = Image;
exports.Gallery = Gallery;