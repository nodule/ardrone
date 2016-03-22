module.exports = {
  name: "clockwise",
  ns: "ardrone",
  description: "Spins the drone clockwise",
  phrases: {
    active: "Spinning clockwise"
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
  fn: function clockwise(input, $, output, state, done, cb, on) {
    var r = function() {
      $.client.clockwise($.speed);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}