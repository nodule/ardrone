module.exports = {
  name: "back",
  ns: "ardrone",
  description: "Controls the pitch, which a horizontal movement using the camera as a reference point. speed can be a value from 0 to 1.",
  phrases: {
    active: "Back pitching"
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
  fn: function back(input, $, output, state, done, cb, on) {
    var r = function() {
      $.client.back($.speed);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}