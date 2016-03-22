module.exports = {
  name: "counterClockwise",
  ns: "ardrone",
  description: "Spins the drone counter clockwise",
  phrases: {
    active: "Spinning counter clockwise"
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "Client",
        required: true
      },
      speed: {
        title: "Speed",
        type: "float",
        "default": 0.1
      }
    },
    output: {}
  },
  fn: function counterClockwise(input, $, output, state, done, cb, on) {
    var r = function() {
      $.client.counterClockwise($.speed);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}