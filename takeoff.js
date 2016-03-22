module.exports = {
  name: "takeoff",
  ns: "ardrone",
  description: "Ardrone takeoff",
  phrases: {
    active: "Ardrone taking off"
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "Client",
        required: true
      }
    },
    output: {
      hovering: {
        title: "Hovering",
        type: "any"
      }
    }
  },
  fn: function takeoff(input, $, output, state, done, cb, on) {
    var r = function() {
      $.client.takeoff(function() {
        output({
          hovering: $.create('Hovering')
        });
        done();
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}