module.exports = {
  name: "voxel",
  ns: "ardrone",
  description: "Creates a virtual drone to use in voxeljs",
  phrases: {
    active: "Creating virtual drone"
  },
  ports: {
    input: {
      game: {
        title: "Game",
        type: "object"
      }
    },
    output: {
      client: {
        title: "Client",
        type: "Client",
        required: true
      }
    }
  },
  dependencies: {
    npm: {
      "voxel-drone": require('voxel-drone')
    }
  },
  fn: function voxel(input, $, output, state, done, cb, on, voxel_drone) {
    var r = function() {
      output.client = $.create(voxel_drone($.game))
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}