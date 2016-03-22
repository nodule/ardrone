module.exports = {
  name: "stop",
  ns: "ardrone",
  description: "Sets all drone movement commands to 0, making it effectively hover in place.",
  phrases: {
    active: "Stopping.."
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "Client",
        required: true
      }
    },
    output: {}
  },
  fn: function stop(input, $, output, state, done, cb, on) {
    var r = function() {
      $.client.stop();
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}