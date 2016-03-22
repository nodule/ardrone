module.exports = {
  name: "land",
  ns: "ardrone",
  description: "Lands the drone",
  phrases: {
    active: "Landing..."
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "Client"
      }
    },
    output: {
      landed: {
        title: "Landed",
        type: "any"
      }
    }
  },
  fn: function land(input, $, output, state, done, cb, on) {
    var r = function() {
      ar_drone.land(function() {
        output({
          landed: $.create('landed')
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