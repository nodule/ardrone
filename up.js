module.exports = {
  name: "up",
  ns: "ardrone",
  description: "Moves the drone upward",
  phrases: {
    active: "Moving up"
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
  fn: function up(input, $, output, state, done, cb, on) {
    var r = function() {
      $.client.up($.speed);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}