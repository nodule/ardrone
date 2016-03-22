module.exports = {
  name: "down",
  ns: "ardrone",
  description: "Moves the drone down",
  phrases: {
    active: "Moving down"
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
  fn: function down(input, $, output, state, done, cb, on) {
    var r = function() {
      $.client.down($.speed);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}