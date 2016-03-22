module.exports = {
  name: "right",
  ns: "ardrone",
  description: "Controls the roll, which is a horizontal movement using the camera as a reference point. speed can be a value from 0 to 1.",
  phrases: {
    active: "Rolling right"
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
  fn: function right(input, $, output, state, done, cb, on) {
    var r = function() {
      $.client.right($.speed);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}