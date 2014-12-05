// Add config here
var voxel = require('voxel');

var defaults = {
  generate: voxel.generator['Valley'],
  chunkDistance: 2,
  materials: ['#fff', '#000'],
  materialFlatColor: true,
  worldOrigin: [0, 0, 0],
  controls: { discreteFire: true }
};

var config =
{
  container: '#container',
  generate: function(x, y, z) {
    return y === 1 ? 1 : 0
  },
  chunkDistance: 1,
  materials: [['grass', 'dirt', 'grass_dirt'], 'brick', 'dirt']
};

require('./')(config);
